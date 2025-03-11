import { Bio } from "@/data/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TitleAnimation from "./csr-components/TitleAnimation";
import HeroBgAnimation from "./HeroBgAnimation";

const Hero = () => {
  return (
    <div id="about">
      <div className="bg-card_light flex justify-center relative px-8 py-20 z-10 clip-custom max-[960px]:py-[66px] max-[960px]:px-4 max-[640px]:py-8 max-[640px]:px-4">
        <div className="absolute flex justify-end top-1/2 left-1/2 w-full h-full max-w-[1360px] overflow-hidden px-[30px] transform -translate-x-1/2 -translate-y-1/2 max-[960px]:p-0 max-[960px]:justify-center">
          <HeroBgAnimation />
        </div>
        <div className="relative flex justify-between items-center w-full max-w-[1100px] max-[960px]:flex-col">
          <div
            className="w-full order-1 max-[960px]:order-2 max-[960px]:mb-[30px] max-[960px]:flex max-[960px]:flex-col max-[960px]:items-center max-[640px]:order-2"
            id="Left"
          >
            <div className="font-bold text-[50px] text-[#f9f9f9] leading-[68px]  max-[960px]:text-center max-[640px]:text-[40px] max-[640px]:leading-[48px] max-[640px]:mb-2">
              Hi, I am <br /> {Bio.name}
            </div>

            <div className="font-semibold text-[32px] flex gap-3 text-[#f9f9f9] leading-[68px] max-[960px]:text-center max-[640px]:text-[22px] max-[640px]:leading-[48px] max-[640px]:mb-4">
              I am a
              <span className="text-primary">
                <TitleAnimation />
              </span>
            </div>
            <div className="text-[20px] leading-[32px] mb-10 text-[rgba(242,243,244,0.584)] max-[960px]:text-center max-[640px]:text-base">
              {Bio.description}
            </div>

            <Link href={Bio.resume} target="display" className="resume-button">
              Check Resume
            </Link>
          </div>

          <div
            className="flex justify-end w-full order-2 gap-3 max-[960px]:order-1 max-[960px]:justify-center max-[960px]:items-center max-[960px]:mb-20 max-[640px]:mb-8"
            id="Right"
          >
            <Image
              src="/HeroImage.jpg"
              alt="hero-image"
              width={400}
              height={400}
              className="relative w-full h-full max-w-[400px] max-h-[400px] rounded-full border-2 border-primary max-[768px]:max-w-[400px] max-[768px]:max-h-[400px] max-[640px]:max-w-[280px] max-[640px]:max-h-[280px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
