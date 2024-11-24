import prisma from "@/lib/db";
import React from "react";

const All = async ({ params }: { params: Promise<{ testId: string }> }) => {
  const testId = (await params).testId;
  console.log(testId);

  const data = await prisma.feedback.findMany({
    where: {
      testimonialId: testId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  console.log("data", data);
  return (
    <div className="h-full w-full">
      {data.length > 0 ? (
        <div></div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <h1 className="text-4xl text-primary ">
            Currently no feedback in available
          </h1>
        </div>
      )}
    </div>
  );
};

export default All;
