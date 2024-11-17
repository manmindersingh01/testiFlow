"use server";
import getUser from "@/hooks/getUser";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Folder, Plus, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";
import CreateSpaceButton from "@/components/CreateSpaceButton";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
async function getSpaces() {
  const data = await getUser();
  const spaces = prisma.space.findMany({
    where: {
      userId: data.user?.id,
    },
  });

  return spaces;
}
async function getPlan() {
  const data = await getUser();
  const user = await prisma.user.findUnique({
    where: {
      id: data.user?.id,
    },
  });
  return user;
}
async function page() {
  const data = await getUser();
  //console.log("name", data);

  const spaces = await getSpaces();
  const user = await getPlan();
  //console.log("spaces", spaces);

  return (
    <div className=" flex flex-col gap-5">
      <div className=" border-b p-5 flex justify-between">
        <h1>
          {" "}
          <span className="font-bold text-xl ">{data?.user?.name}</span>
        </h1>

        <div className=" flex items-center justify-center gap-10">
          <Link
            className="border bg-primary-foreground rounded-lg p-2 hover:bg-primary-foreground/70"
            href="/spaces"
          >
            View all Spaces
          </Link>
          <Avatar>
            <AvatarImage src={data.user?.image as string} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className=" border h-auto w-full max-w-6xl mx-auto rounded-lg p-5 ">
        <h1 className=" font-extrabold text-3xl ">Overview</h1>
        <div>
          <div className=" grid md:grid-cols-2 grid-cols-1">
            <div className="p-2 mt-7 w-96 h-32 rounded-md border bg-gray-400/10">
              <h1>total videos</h1>
              <p>2</p>
            </div>
            <div className="p-2 mt-7 w-96 h-32 rounded-md border bg-gray-400/10">
              <h1>Total spaces</h1>

              {spaces.length > 0 ? (
                <p className=" text-gray-400 text-xs">
                  {" "}
                  {`You have ${spaces.length} spaces`}
                </p>
              ) : (
                <p className=" text-gray-400 text-xs">
                  Currently you have no spaces
                </p>
              )}
            </div>
            <div className="p-2 mt-7 w-96 h-32 rounded-md border bg-gray-400/10">
              <h1>Plan</h1>
              <div className=" flex justify-between items-center">
                <p className=" text-xl text-gray-400">{user?.plan}</p>
                <Button className=" flex items-center justify-center gap-2">
                  Upgrade{" "}
                  <span className=" text-orange-600">
                    <Star />
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border rounded-lg bg-gray-400/10 h-48 w-[70%] mx-auto p-5 flex items-center justify-center flex-col gap-4 ">
        <div className="p-4 rounded-full bg-gray-400/20">
          <Folder />
        </div>

        <div className=" flex items-center justify-center gap-2">
          <CreateSpaceButton data={data} />
        </div>
        <p className="text-gray-400 text-xs">
          {spaces.length > 0
            ? `You have ${spaces.length} spaces`
            : "Create your first space to start collecting testimonials"}
        </p>
      </div>
    </div>
  );
}

export default page;
