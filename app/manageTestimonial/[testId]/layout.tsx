import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import Image from "next/image";
import React from "react";

const ManageTest = async ({
  params,
}: {
  params: Promise<{ testId: string }>;
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
      <div className="max-w-7xl mx-auto">
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
          <div>
            <Button variant={"outline"}>Edit testimonial </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageTest;
