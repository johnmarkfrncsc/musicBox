import { Button } from "@/components/ui/button";
import React from "react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center p-4 bg-black text-white">
        {/* Nav Right */}
        <div className="pl-10">
          <Button
            variant="ghost"
            size="icon"
            className="bg-black items-center rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="50"
              fill="currentColor"
              className="bi bi-boombox"
              viewBox="0 0 16 16"
            >
              <path d="M2.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2 0a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m7.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m1.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-7-1a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1zm5.5 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
              <path d="M11.5 13a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m0-1a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5 10.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
              <path d="M7 10.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m-1 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
              <path d="M14 0a.5.5 0 0 1 .5.5V2h.5a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12.5V.5A.5.5 0 0 1 14 0M1 3v3h14V3zm14 4H1v7h14z" />
            </svg>
          </Button>
        </div>

        {/* Nav Center */}
        <div className="text-white flex ml-30 gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="bg-black flex gap-2 items-center rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="50"
              fill="currentColor"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
            </svg>
          </Button>

          <Input type="search" placeholder="Search" className="w-2xs" />
        </div>

        {/* Nav Left */}
        <div className="space-x-4">
          <Button variant="ghost" className="text-white">
            About
          </Button>
          <Button variant="ghost" className="text-white">
            Premium
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
