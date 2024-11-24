"use client";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";

function CopyurlButton({ testId }: { testId: string }) {
  const handleCopy = () => {
    navigator.clipboard.writeText(
      `http://localhost:3000/testimonialPreview/${testId}`
    );
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
    });
  };
  return (
    <Button variant={"outline"} onClick={handleCopy}>
      Copyurl
    </Button>
  );
}

export default CopyurlButton;
