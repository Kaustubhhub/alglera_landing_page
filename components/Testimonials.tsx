"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="h-screen rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="flex justify-center items-center text-center text-3xl md:text-4xl pb-6 md:pb-10 font-semibold">
        Built by data experts from
      </div>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    image: "https://cdn.prod.website-files.com/6696c350570bd6766b255238/66974184b1d2bd59c9c1cf97_Meta_id0D-m9C5l_9-p-500.png", // Meta
  },
  {
    image: "https://cdn.prod.website-files.com/6696c350570bd6766b255238/66980bf8da8a87429e53c772_66974308c14609d0c5777743_image%20(1)%20(1)-p-500.png", // Uber Eats
  },
  {
    image: "https://cdn.prod.website-files.com/6696c350570bd6766b255238/669740b897391c610daaf5d4_stanford-logo-p-500.png", // Stanford University
  },
  {
    image: "https://cdn.prod.website-files.com/6696c350570bd6766b255238/66974059b1d2bd59c9c0d6ef_microsoft%2Blogo%2Bwhite-p-500.png", // Microsoft
  },
];
