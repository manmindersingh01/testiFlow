import prisma from "@/lib/db";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const spaceId = req.nextUrl.searchParams.get("spaceId");
  try {
    const res = await prisma.space.findUnique({
      where: {
        id: spaceId as string,
      },
    });
    if (res) {
      return new Response(JSON.stringify(res));
    }
  } catch (error) {
    console.log("error while fetching space in db", error);
  }
  // return new Response("Hello from Next.js!");
}
