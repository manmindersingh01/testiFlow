import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import SignIn from "../auth/sign-in";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full    border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-screen-xl  flex h-14 items-center  ">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-mono font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent ">
              TestiFlow
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center space-x-6">
            <Link
              href="/pricing"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Pricing
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Documentation
            </Link>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />

            <SignIn />
          </div>
        </div>
      </div>
    </header>
  );
}
