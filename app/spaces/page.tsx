import AddTestimonial from "@/components/addTestimonial";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import getUser from "@/hooks/getUser";
import prisma from "@/lib/db";
import { ArrowDownToDot } from "lucide-react";
import { redirect } from "next/navigation";
import React from "react";

const Spaces = async () => {
  const session = await getUser();
  const spaces = await prisma.space.findMany({
    where: {
      userId: session.user?.id,
    },
  });
  console.log(spaces);

  return (
    <>
      {spaces.length > 0 ? (
        <div className="p-5">
          <h1 className="text-primary font-bold text-3xl">Spaces</h1>
          <div className="flex justify-center p-5 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:grid-cols-3">
              {spaces.map((space) => (
                <Card>
                  <CardHeader>
                    <CardTitle>{space.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="grid gap-2">
                    <CardDescription>{space.description}</CardDescription>
                    <AddTestimonial spaceId={space.id} />
                  </CardContent>
                  <CardFooter>
                    <p className="text-gray-400">
                      Created at: {space.createdAt.toLocaleString()}
                    </p>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className=" flex items-center justify-center w-full h-screen">
          <h1 className="text-primary font-extrabold  text-4xl">
            Currently you got no spaces!!
          </h1>
        </div>
      )}
    </>
  );
};

export default Spaces;
