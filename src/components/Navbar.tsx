"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="AboutUs">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/about">Web Development</HoveredLink>
            <HoveredLink href="/about">Interface Design</HoveredLink>
            <HoveredLink href="/about">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/about">Branding</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Join Our team">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <HoveredLink href="/signup">Ui/Ux</HoveredLink>
            <HoveredLink href="/signup">Frontend</HoveredLink>
            <HoveredLink href="/signup">Backend</HoveredLink>
            <HoveredLink href="/signup">Cloud</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contacts">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/contacts">Lead</HoveredLink>
            <HoveredLink href="/contact">Vice Lead</HoveredLink>
            <HoveredLink href="/contact">Domain Lead</HoveredLink>
            <HoveredLink href="/contact">Members</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
