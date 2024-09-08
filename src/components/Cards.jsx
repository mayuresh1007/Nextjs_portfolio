"use client";
import React, { useState } from "react";
import { BackgroundGradient } from "./ui/background-gradient";
import Image from "next/image";
import projects from "@/data/projects_mayu.json";

export function Cards() {
  const [Projects, setProjects] = useState(projects.projects);
  console.log(Projects, Projects[0].images[0]);
  return (
    <>
      <div className="text-center text-4xl py-4">Cards in map</div>
      <div className="flex flex-wrap justify-center gap-4 container mx-auto">
        {Projects.map((item) => (
          <div className="flex py-2 justify-center items-center">
            <BackgroundGradient
              key={item.id}
              className=" rounded-[22px] max-w-sm p-3 sm:p-10 bg-white dark:bg-zinc-900"
            >
              <Image
                src={item.images[0]}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {item.title}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.subtitle}
              </p>
              <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                <span>Buy now </span>
                <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                  $100
                </span>
              </button>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </>
  );
}
