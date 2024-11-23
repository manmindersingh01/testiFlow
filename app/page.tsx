import { Button } from "@/components/ui/button";
import { ArrowRight, Users2, Code2, Paintbrush } from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import BackdropGradient from "@/components/backdrop-gradient";
import { signInAction } from "@/actions/authActions";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await auth();
  if (session?.user) {
    redirect("/dashboard");
  }
  return (
    <div className="flex min-h-screen   w-full  flex-col mx-auto">
      <Header />

      {/* Hero Section */}
      <section className="container px-4 py-24 md:px-6 lg:py-32 mx-auto ">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-transparent bg-clip-text text-transparent tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Collect & Showcase Your's
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}
                Customer Love
              </span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Create beautiful testimonial pages, collect reviews effortlessly,
              and embed them anywhere on your website.
            </p>
          </div>
          <div className="flex flex-col gap-4 min-[400px]:flex-row">
            <form action={signInAction}>
              <Button size="lg" className="gap-2">
                Start for Free
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
            <Link href="/demo">
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container px-4 py-16 md:px-6 mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-purple-100 p-4 dark:bg-purple-900">
              <Users2 className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>
            <h3 className="text-xl font-bold">Easy Collection</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Share a simple link and let your customers leave beautiful
              testimonials with photos and videos.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-blue-100 p-4 dark:bg-blue-900">
              <Paintbrush className="h-6 w-6 text-blue-600 dark:text-blue-300" />
            </div>
            <h3 className="text-xl font-bold">Custom Design</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Customize every aspect of your testimonial page to match your
              brand perfectly.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="rounded-full bg-pink-100 p-4 dark:bg-pink-900">
              <Code2 className="h-6 w-6 text-pink-600 dark:text-pink-300" />
            </div>
            <h3 className="text-xl font-bold">Easy Embedding</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Add your testimonials to any website with our simple embed code.
              No coding required.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
