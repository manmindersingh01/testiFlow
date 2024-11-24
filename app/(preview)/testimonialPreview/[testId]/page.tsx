import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, PenIcon, ThumbsUp, VideoIcon } from "lucide-react";
import prisma from "@/lib/db";
import { Label } from "@/components/ui/label";
import Video from "@/app/manageTestimonial/[testId]/video/page";
import TextButton from "@/components/sendText";
const Preview = async ({ params }: { params: Promise<{ testId: string }> }) => {
  const testId = (await params).testId;

  const data = await prisma.testimonial.findUnique({
    where: {
      id: testId,
    },
    include: {
      questions: true,
    },
  });
  //console.log(data?.questions);

  return (
    <div>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="bg-green-500/20 border-green-100 rounded-xl p-2 px-4 m-3">
          <h1>Please give your valued feedback</h1>
        </div>
        <Card className="w-96">
          <CardHeader className="flex flex-col items-center justify-center">
            <img
              className="w-full h-36 object-cover rounded-lg"
              src={
                data?.imageUrl ||
                "https://images.pexels.com/photos/29276458/pexels-photo-29276458/free-photo-of-colorful-wooden-houses-in-bergen-norway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt="Space Logo"
            />
            <CardTitle className="text-center text-2xl font-bold">
              {data?.title || "Header goes here..."}
            </CardTitle>
            <div className="text-3xl text-blue-600">
              <ThumbsUp size={64} />
            </div>
          </CardHeader>
          <CardContent>
            <p className="m-2 text-center text-gray-400">
              {data?.content || "Your custom message goes here..."}
            </p>
            <div className="my-7">
              <Label>Questions</Label>
              <div>
                {data?.questions.map((question, index) => (
                  <p
                    key={index}
                    className="text-gray-400 flex items-center justify-center"
                  >
                    <ArrowRight size={15} />{" "}
                    {question.question || "Question here..."}
                  </p>
                ))}
              </div>
            </div>
            <div className="grid gap-2">
              <Button className="flex items-center justify-center gap-2">
                Record a video <VideoIcon />
              </Button>
              <TextButton testId={testId} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Preview;
