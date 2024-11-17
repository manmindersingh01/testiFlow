"use client";
import React from "react";
import { Button } from "./ui/button";
import { redirect } from "next/navigation";

function CreateTestimonialButton({ spaceId }: { spaceId: string }) {
  return (
    <Button onClick={() => redirect(`/createTestimonial/${spaceId}`)}>
      Create new testimonial
    </Button>
  );
}

export default CreateTestimonialButton;
