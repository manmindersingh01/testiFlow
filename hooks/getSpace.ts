"use server";

import prisma from "@/lib/db";
type id = {
  id: string;
};
export default async function getSpace(id: id) {
  const res = await prisma.space.findUnique({
    where: {
      id: String(id),
    },
  });

  return res;
}
