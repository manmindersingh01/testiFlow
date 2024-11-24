"use client";

import { Folder, Heart, Text, Video } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = ({ testId }: { testId: string }) => {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <div className="h-screen border-r flex flex-col gap-y-4">
      <div>
        <h1 className="text-lg font-bold">Inbox</h1>
        <div className="pl-3 grid gap-y-2 gap-2 mr-2">
          <Link
            href={`/manageTestimonial/${testId}/all`}
            className={`border rounded-md p-2 flex justify-start items-center gap-2 ${
              isActive(`/manageTestimonial/${testId}/all`)
                ? "bg-primary text-white"
                : "bg-primary-foreground/20"
            }`}
          >
            <Folder />
            <h2>All</h2>
          </Link>
          <Link
            href={`/manageTestimonial/${testId}/video`}
            className={`border rounded-md p-2 flex justify-start items-center gap-2 ${
              isActive(`/manageTestimonial/${testId}/video`)
                ? "bg-primary text-white"
                : "bg-primary-foreground/20"
            }`}
          >
            <Video />
            <h2>Video</h2>
          </Link>
          <Link
            href={`/manageTestimonial/${testId}/text`}
            className={`border rounded-md p-2 flex justify-start items-center gap-2 ${
              isActive(`/manageTestimonial/${testId}/text`)
                ? "bg-primary text-white"
                : "bg-primary-foreground/20"
            }`}
          >
            <Text />
            <h2>Text</h2>
          </Link>
          <Link
            href={`/manageTestimonial/${testId}/liked`}
            className={`border rounded-md p-2 flex justify-start items-center gap-2 ${
              isActive(`/manageTestimonial/${testId}/liked`)
                ? "bg-primary text-white"
                : "bg-primary-foreground/20"
            }`}
          >
            <Heart />
            <h2>Liked</h2>
          </Link>
        </div>
      </div>
      <div>
        <h1 className="text-lg font-bold">Embedded Widgets</h1>
        <div className="pl-3 grid gap-y-2 gap-2 mr-2">
          <Link
            href={`/manageTestimonial/${testId}/wall-of-love`}
            className={`border rounded-md p-2 flex justify-start items-center gap-2 ${
              isActive(`/manageTestimonial/${testId}/wall-of-love`)
                ? "bg-primary text-white"
                : "bg-primary-foreground/20"
            }`}
          >
            <Heart />
            <h2>Wall of Love</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
