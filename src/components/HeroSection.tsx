import Link from "next/link";
import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";
import Image from "next/image";
export const HeroSection = () => {
  return (
    <div className=" h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-5 md:py-0">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="yellow"
      />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="yellow"
      />
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="gradient-title font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
          Rana Yuvraj Singh
        </h1>
        <p className="mt-4 font-normal text-base md:text-3xl text-neutral-300 max-w-lg mx-auto gradient-para lg:text-8xl tracking-tighter md:px-6 text-center">
          Full Stack Developer
        </p>
        <div className="mt-4">
          <Button borderRadius="20%">
            <Image
              src="/Github1.png"
              width={30}
              height={30}
              alt="Image"
            ></Image>
            <Link href="https://github.com/ranayuvrajsingh" target="_blank">
              Github
            </Link>
          </Button>
          <Button borderRadius="20%">
            <Image
              src="/Linkdin1.png"
              width={30}
              height={30}
              alt="Image"
            ></Image>
            <Link
              href="https://www.linkedin.com/in/ranayuvrajsingh/"
              target="_blank"
            >
              Linkdin
            </Link>{" "}
          </Button>
          <Button borderRadius="20%">
            {" "}
            <Image src="/X.png" width={30} height={30} alt="Image"></Image>
            <Link href="#" target="_blank">
              Twitter
            </Link>{" "}
          </Button>
          <Button borderRadius="20%">
            {" "}
            <Image src="/cv.png" width={30} height={30} alt="Image"></Image>
            <Link
              href="https://drive.google.com/file/d/1GiRtDdhXFKignL9nSma1ssplZdLL7GVH/view?usp=sharing"
              target="_blank"
            >
              {" "}
              Downlord Resume
            </Link>{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};
