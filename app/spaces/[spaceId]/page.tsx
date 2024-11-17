"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import getSpace from "@/hooks/getSpace";
import { any } from "zod";
import { ArrowRight, PenBoxIcon } from "lucide-react";
import prisma from "@/lib/db";
import { $Enums } from "@prisma/client";
import { PiSmileySad } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CreateTestimonialButton from "@/components/createTestimonial";
interface Testimonials {
  spaceId: string;
  id: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  imageUrl: string | null;
  visibility: $Enums.Visibility | null;
  layout: $Enums.Layout;
}

interface SpaceData {
  id: string;
  name: string;
  userId: string;
  decription: string;
  createdAt: string;
  testimonials: Testimonials[];
}
const page = () => {
  const { spaceId } = useParams();
  const [spaceData, setSpaceData] = useState<SpaceData>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSpace = async () => {
      try {
        const response = await fetch(`/api/getSpace?spaceId=${spaceId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch space data");
        }

        const data = await response.json();
        console.log(data.name);

        setSpaceData(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    if (spaceId) {
      fetchSpace();
    }
  }, [spaceId]);
  console.log("new", spaceData);

  // const { spaceId } = await params;

  // const res = await prisma.space.findUnique({
  //   where: {
  //     id: spaceId,
  //   },
  //   include: { testimonials: true },
  // });
  const res = spaceData;
  const testLength = res?.testimonials.length;
  console.log("res", res);

  return (
    <>
      <div className="p-5">
        <div className="flex items-center  gap-2 ">
          {" "}
          <Link
            className="text-3xl font-extrabold text-primary mr-4 underline "
            href={"/"}
          >
            TistiFlow
          </Link>
          <span className="text-3xl font-extrabold ">space </span>
          <span className=" text-sm border bg-primary-foreground rounded-lg p-2">
            {res?.name}
          </span>
        </div>
        <div>
          <div className="w-full max-w-7xl border bg-primary-foreground rounded-lg h-96 mx-auto p-2 m-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent tracking-tighter ">
              Testimonials
            </h1>
            {testLength ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1 m-2">
                {res?.testimonials.map((val) => (
                  <div className=" border rounded-lg bg-black/40 text-white w-96 h-24 p-2 font-bold ">
                    <h1>{val.title}</h1>
                    <p className="text-gray-400 text-xs">{val.content}</p>
                    <div className="flex items-center my-2 text-xs text-gray-400 ">
                      <p>{val.createdAt.toLocaleString()}</p>
                      <p>{val.visibility}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
                {" "}
                <PiSmileySad size={90} />
                <p>Currently you got zero testimonials , create some</p>
              </div>
            )}
          </div>
          <div className="w-full max-w-7xl border bg-primary-foreground rounded-lg h-96 mx-auto p-2 m-2 flex flex-col items-center justify-center gap-4">
            <PenBoxIcon size={70} />
            <CreateTestimonialButton spaceId={spaceId as string} />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
