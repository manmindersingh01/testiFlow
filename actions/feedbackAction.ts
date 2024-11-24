"use server";

import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export default async function feedbackAction(formData: FormData) {
  console.log("form data", formData.get("name"));
  console.log("testimonialId", formData.get("testimonialId"));
  console.log("content", formData.get("content"));

  try {
    const res = await prisma.feedback.create({
      data: {
        name: formData.get("name") as string,
        content: formData.get("content") as string,
        testimonialId: formData.get("testimonialId") as string,
      },
    });

    // Redirect to the testimonials page
  } catch (error) {
    console.error("Error creating testimonial:", error);
  }

  redirect("/thankyou");
}
