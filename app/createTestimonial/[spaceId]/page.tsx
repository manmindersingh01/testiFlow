"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, PenIcon, ThumbsUp, Video } from "lucide-react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

type FormInputs = {
  nameSpace: string;
  logo: FileList;
  headerTitle: string;
  description: string;
  questions: string[];
};
import { UploadButton } from "../../../lib/uploadthing";
import { log } from "console";
import createTestimonialAction from "@/actions/createTestimonialAction";
import { useParams, usePathname } from "next/navigation";
const Page = () => {
  const pathname = usePathname();
  const { spaceId } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitted },
  } = useForm<FormInputs>();

  // Watch the form values for live updates
  const nameSpace = watch("nameSpace", "Header goes here...");
  const headerTitle = watch("headerTitle", "Header goes here...");
  const description = watch("description", "Your custom message goes here...");
  const questions = watch("questions", [
    "Who are you / what are you working on?",
  ]);
  const [logo, setLogo] = useState("");
  // const onSubmit = async (data: FormInputs) => {
  //   const newData = { ...data, imageUrl: logo };
  //   console.log("Form Data Submitted: ", newData);
  // };

  return (
    <div className="p-5 w-full">
      <h1 className="font-extrabold text-gray-400 w-full">
        Create your Workspace
      </h1>
      <div className="flex items-center justify-center flex-col lg:flex-row gap-7 w-full">
        {/* Live Preview Section */}
        <div className="w-[50%] flex flex-col items-center justify-center">
          <div className="bg-green-500/20 border-green-100 rounded-xl p-2 px-4 m-3">
            <h1>Live Preview</h1>
          </div>
          <Card className="w-96">
            <CardHeader className="flex flex-col items-center justify-center">
              <img
                className="w-full h-36 object-cover rounded-lg"
                src={
                  logo ||
                  "https://images.pexels.com/photos/29276458/pexels-photo-29276458/free-photo-of-colorful-wooden-houses-in-bergen-norway.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt="Space Logo"
              />
              <CardTitle className="text-center text-2xl font-bold">
                {headerTitle || "Header goes here..."}
              </CardTitle>
              <div className="text-3xl text-blue-600">
                <ThumbsUp size={64} />
              </div>
            </CardHeader>
            <CardContent>
              <p className="m-2 text-center text-gray-400">
                {description || "Your custom message goes here..."}
              </p>
              <div className="my-7">
                <Label>Questions</Label>
                <div>
                  {questions.map((question, index) => (
                    <p
                      key={index}
                      className="text-gray-400 flex items-center justify-center"
                    >
                      <ArrowRight size={15} /> {question || "Question here..."}
                    </p>
                  ))}
                </div>
              </div>
              <div className="grid gap-2">
                <Button className="flex items-center justify-center gap-2">
                  Record a video <Video />
                </Button>
                <Button className="flex items-center justify-center gap-2">
                  Send a text message <PenIcon />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Form Section */}
        <div className="md:w-[50%] p-4 flex flex-col items-center justify-center">
          <div className="w-96 flex flex-col gap-4 border rounded-lg bg-gray-400/10 h-auto p-2">
            <form
              className="flex flex-col gap-4"
              // onSubmit={handleSubmit(onSubmit)}
              action={createTestimonialAction}
            >
              <input type="text" value={spaceId} name="spaceId" hidden />
              <input type="text" value={logo} name="logoUrl" hidden />
              {/* Name Space */}
              {/* <div className="grid gap-2 p-2">
                <Label>Name Space</Label>
                <Input
                  {...register("nameSpace", {
                    required: "Name of space is required",
                  })}
                  placeholder="Enter your workspace name"
                />
                {errors.nameSpace && (
                  <p className="text-red-500 text-xs">
                    {errors.nameSpace.message}
                  </p>
                )}
              </div> */}

              {/* Space Logo */}
              <div className="grid gap-2 p-2">
                <Label>Space Logo</Label>
                {/* <Label>Space Logo</Label>
                <Input type="file" {...register("logo")} /> */}
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    console.log("Files: ", res);
                    setLogo(res[0].url);
                    alert("Upload Completed");
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    alert(`ERROR! ${error.message}`);
                  }}
                />
              </div>

              {/* Header Title */}
              <div className="grid gap-2 p-2">
                <Label>Header Title</Label>
                <Input
                  {...register("headerTitle")}
                  placeholder="Enter a title for your workspace"
                />
              </div>

              {/* Description */}
              <div className="grid gap-2 p-2">
                <Label>Description</Label>
                <Textarea
                  {...register("description")}
                  placeholder="Write a warm message for your customers"
                />
              </div>

              {/* Questions */}
              <div className="grid gap-2 p-2">
                <Label>Questions</Label>
                <Input
                  {...register("questions.0")}
                  placeholder="Ask a question to your customers"
                />
                <Input
                  {...register("questions.1")}
                  placeholder="Ask a question to your customers"
                />
                <Input
                  {...register("questions.2")}
                  placeholder="Ask a question to your customers"
                />
              </div>

              <Button type="submit" className="w-full">
                Create new testimonial
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
