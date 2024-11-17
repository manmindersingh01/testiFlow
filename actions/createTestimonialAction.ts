"use server";

import getUser from "@/hooks/getUser";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export default async function createTestimonialAction(formdata: FormData) {
  const session = await getUser();

  try {
    const questions = [];
    for (let i = 0; i < 3; i++) {
      const question = formdata.get(`questions.${i}`);
      if (question) {
        questions.push({ question });
      }
    }

    const res = await prisma.testimonial.create({
      data: {
        spaceId: formdata.get("spaceId") as string,
        title: formdata.get("headerTitle") as string,
        content: formdata.get("description") as string,
        imageUrl: formdata.get("logoUrl") as string,
        userId: session.user?.id as string,
        questions: {
          create: questions as any,
        },
      },
    });
    console.log("testimonial", res);
  } catch (error) {
    console.log(error);
  }
  redirect(`/spaces/${formdata.get("spaceId")}`);
  console.log("form data");
}

// id          String   @id @default(cuid()) // Unique identifier
// spaceId     String
// space       Space    @relation(fields: [spaceId], references: [id])
// title       String   // Testimonial title
// content     String   // Testimonial content
// imageUrl    String?  // Optional image/video URL
// visibility  Visibility? @default(PUBLIC)     // Visibility (PUBLIC or PRIVATE)
// createdAt   DateTime @default(now())        // Creation timestamp
// updatedAt   DateTime @updatedAt             // Auto-update on change
// userId  String
// layout   Layout?    @default(SLIDER)
