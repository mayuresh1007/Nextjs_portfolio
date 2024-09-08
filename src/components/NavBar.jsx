"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { AuroraBackground } from "./ui/aurora-background";

export default function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div
          className={cn(
            "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
            className
          )}
        >
          <Menu setActive={setActive}>
            <HoveredLink href={"/"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Home"
              ></MenuItem>
            </HoveredLink>
            <HoveredLink href={"/projects"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Projects"
              ></MenuItem>
            </HoveredLink>
            <HoveredLink href={"/contact"}>
              <MenuItem
                setActive={setActive}
                active={active}
                item="Contact"
              ></MenuItem>
            </HoveredLink>
            {/* <Link href={"/contact me"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Me"
          ></MenuItem>
        </Link> */}
          </Menu>
          {/* <Menu>
        <Link href={"/contact me"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact Me"
          ></MenuItem>
        </Link>
      </Menu> */}
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
