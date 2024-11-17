"use server";

import getUser from "@/hooks/getUser";
import prisma from "@/lib/db";
import { redirect } from "next/navigation";

export default async function createSpaceAction(formData: FormData) {
  const session = await getUser();
  try {
    const res = await prisma.space.create({
      data: {
        name: formData.get("name") as string,
        description: formData.get("description") as string,
        userId: formData.get("id") as string,
      },
    });
    //console.log("message", res);
  } catch (error) {
    console.log(error);
  }

  redirect(`/spaces`);
}
