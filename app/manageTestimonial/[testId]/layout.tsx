import CopyurlButton from "@/components/copyurlButton";
import Sidebar from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { Folder, Heart, Text, Video } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { toast } from "sonner";

const ManageTest = async ({
  params,
  children,
}: {
  params: Promise<{ testId: string }>;
  children: React.ReactNode;
}) => {
  const testId = (await params).testId;
  //console.log(testId);

  const data = await prisma.testimonial.findUnique({
    where: {
      id: testId,
    },
    include: {
      questions: true,
    },
  });
  //console.log("data", data);
  return (
    <>
      <div className="">
        <div className=" w-full flex justify-between items-center border-b p-4 ">
          <div className=" flex items-center gap-4 ">
            <Image
              className=" rounded-lg"
              src={data?.imageUrl as string}
              width={100}
              height={100}
              alt=""
            />
            <h1 className="text-2xl font-bold">{data?.title}</h1>
          </div>
          <div className="gap-2 flex items-center justify-center">
            <Button variant={"outline"}>Edit testimonial </Button>
            <CopyurlButton testId={testId} />
          </div>
        </div>
        <div className=" flex w-full ">
          <div className="w-[15%] py-4 pl-4">
            <div className="h-screen border-r flex flex-col gap-y-4">
              <Sidebar testId={testId} />
            </div>
          </div>
          <div className="w-[85%]">{children}</div>
        </div>
      </div>
    </>
  );
};

export default ManageTest;
