"use client";
import React from "react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";
import { ArrowDownToDot } from "lucide-react";

function AddTestimonial({ spaceId }: { spaceId: string }) {
  return (
    <Button
      onClick={() => redirect(`/spaces/${spaceId}`)}
      className="flex gap-2 items-center justify-center"
    >
      <ArrowDownToDot size={15} />
      Add testimonial
    </Button>
  );
}

export default AddTestimonial;
