"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import Link from "next/link";
import { Github } from "lucide-react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <div className="container flex-1 items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600 to-pink-600" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <Link href="/">TestiFlow</Link>
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">
                "TestiFlow has completely transformed how we collect and display customer testimonials. It's been a game-changer for our business."
              </p>
              <footer className="text-sm">Sofia Davis, Marketing Director</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
              <p className="text-sm text-muted-foreground">
                Enter your email to sign in to your account
              </p>
            </div>
            <form onSubmit={onSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="name@example.com"
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    disabled={isLoading}
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    autoCapitalize="none"
                    autoComplete="current-password"
                    disabled={isLoading}
                  />
                </div>
                <Button disabled={isLoading}>
                  {isLoading && (
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-b-transparent" />
                  )}
                  Sign In
                </Button>
              </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            <Button variant="outline" type="button" disabled={isLoading}>
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
            <p className="px-8 text-center text-sm text-muted-foreground">
              <Link
                href="/signup"
                className="hover:text-brand underline underline-offset-4"
              >
                Don&apos;t have an account? Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}