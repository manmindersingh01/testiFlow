import Link from "next/link";
import { Star } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t w-full mx-auto">
      <div className="container mx-auto max-w-screen-xl  flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center bg-gradient-to-r font-extrabold from-purple-600 to-pink-600 bg-clip-text text-transparent text-sm leading-loose md:text-left">
            Manminder singh
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/terms" className="text-sm underline underline-offset-4">
            Terms
          </Link>
          <Link
            href="/privacy"
            className="text-sm underline underline-offset-4"
          >
            Privacy
          </Link>
        </div>
      </div>
    </footer>
  );
}
