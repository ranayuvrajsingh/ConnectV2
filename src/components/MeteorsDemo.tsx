import React from "react";
import { Meteors } from "./ui/meteors";

export function MeteorsDemo() {
  return (
    <div className="">
      <div className=" w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div >
          <div >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="200 1000 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-2 w-2 text-gray-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
              />
            </svg>
          </div>
          {/* Meaty part - Meteor effect */}
          <Meteors number={100} />
        </div>
      </div>
    </div>
  );
}
