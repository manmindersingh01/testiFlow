# Testiflow

A self-hosted testimonial collection tool. Create a "space" for a product or brand, generate a shareable form with custom questions, collect text or video testimonials from customers, and embed the wall on your site in one of three layouts.

Live: https://testi-flow.vercel.app

## What it does

Sign in with Google. Create a Space for whatever you're collecting testimonials for ("My SaaS", "Freelance portfolio"). Inside the Space, create a Testimonial collection page with a title, description, logo, and up to three custom questions. Share the URL with customers. Their submissions come back tagged with name, content, and an optional 1-5 rating, and land in the dashboard where you can mark them as liked, group them into a "wall of love", and split text from video.

When you're ready to publish, embed the wall in one of three layouts: Slider, Carousel, or Grid.

## Data model

```
User ─── Space[] ─── Testimonial[] ─── Question[]
                                   └─ Feedback[]   (name, content, rating)
```

A Testimonial in this app isn't a customer quote. It's a *collection page*. The actual customer quotes are `Feedback` rows attached to it. The naming is a bit overloaded; if I were rebuilding it I'd call them `CollectionPage` and `Submission`.

## How it works

The form flow:

1. Owner creates a Space (`actions/createSpaceAction.ts`).
2. Owner creates a Testimonial inside the Space with up to 3 custom questions (`actions/createTestimonialAction.ts`). The form supports a logo upload via uploadthing.
3. Owner shares `/(preview)/testimonialPreview/[testId]` with customers.
4. Customer submits the form. `feedbackAction.ts` writes a `Feedback` row with their name, content, and optional rating.
5. Customer is redirected to `/thankyou`.

The dashboard splits feedback into tabs: All / Text / Video / Liked / Wall of Love. Marking submissions for the wall is what determines what ends up in the public embed.

Three embed layouts are wired through the `Layout` enum (`SLIDER`, `CAROUSEL`, `GRID`) and rendered with Embla Carousel.

## Setup

Requires Node 20+, Postgres, a Google OAuth client, and an uploadthing app.

```bash
git clone https://github.com/manmindersingh01/testiFlow.git
cd testiFlow
npm install
npx prisma migrate deploy
npm run dev
```

Environment variables:

```
DATABASE_URL=postgresql://...

AUTH_SECRET=...
AUTH_GOOGLE_ID=...
AUTH_GOOGLE_SECRET=...

UPLOADTHING_TOKEN=...
```

## Tech stack

Next.js 15 (App Router), TypeScript, Prisma + Postgres, NextAuth v5, Conform + Zod for forms, uploadthing for logo and image uploads, Embla Carousel for the embed layouts, Tailwind, Radix UI.

## Notes

This started as a Bolt scaffold and grew from there. The data model and the action layer are mine; the initial UI shell came from the scaffold and has been iterated on. The honest reason it exists is that I wanted to practice Server Actions and Prisma without spending design cycles on a brand-new product idea. Testimonial tools are a well-trodden problem, so the focus stayed on the data flow.
