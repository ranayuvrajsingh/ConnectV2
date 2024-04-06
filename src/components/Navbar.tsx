"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-5 inset-x-0 max-w-2xl mx-auto z-50 border-collapse",
        className
      )}
    >
      {" "}
      <Menu setActive={setActive}>
        <Link href={"http://localhost:3000/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/projects"}>
          <MenuItem setActive={setActive} active={active} item="Projects">
            <div className="  text-sm grid grid-cols-2 gap-5 p-4">
              <ProductItem
                title="StellarStyles"
                href="https://stellarstyles.vercel.app/"
                src="/Stellarstyles.jpg"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="CITYSCOPE"
                href="https://www.cityscope.media/"
                src="/City.png"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Admin DashBoard"
                href=""
                src="/EcomDash.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="ISHOWSPEED"
                href="https://ishowspeed-ten.vercel.app/?limit=20"
                src="/Carshow.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Apple Vision"
                href="https://apple-vision-pro-clone.vercel.app/"
                src="/AppleW.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
            </div>
          </MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact">
            {/* <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink href="/hobby">Hobby</HoveredLink>
        <HoveredLink href="/individual">Individual</HoveredLink>
        <HoveredLink href="/team">Team</HoveredLink>
        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
      </div> */}
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default Navbar;
