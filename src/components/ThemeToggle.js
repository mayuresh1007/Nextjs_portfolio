// src/components/ThemeToggle.js
"use client";
import { useTheme } from "../context/ThemeContext";
import { Switch } from "@headlessui/react";
import { useState } from "react";
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(false);
  return (
    <>
      {/* <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="p-2 border rounded"
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button> */}
      <Switch
        checked={enabled}
        onChange={setEnabled}
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="group inline-flex h-7 w-12 items-center rounded-full bg-orange-200 transition data-[checked]:bg-orange-600 p-1"
      >
        {/* <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" /> */}
        {theme === "light" ? (
          <>
            {/* <span className="size-4 translate-x-1 rounded-full bg-black transition group-data-[checked]:translate-x-6" /> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          </>
        ) : (
          <div className="flex">
            {console.log(theme)}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        )}
      </Switch>
    </>
  );
};

export default ThemeToggle;
