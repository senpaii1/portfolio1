"use client";
import { Bio } from "@/data/constants";
import Link from "next/link";
import React, { useState } from "react";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-20 bg-[#191924] flex items-center justify-center text-base sticky top-0 z-50 max-[960px]:transition-all max-[960px]:duration-800 max-[960px]:ease-in-out ">
      <div className=" flex justify-between items-center w-full h-14 px-6 max-w-[1200px]">
        <div className="w-4/5 px-1.5 flex justify-start items-center no-underline max-[640px]:p-0 ">
          <Link
            href="/"
            className="flex items-center text-white cursor-pointer"
          >
            <DiCssdeck size="3rem" />{" "}
            <span className="px-1 font-bold text-lg">Portfolio</span>
          </Link>
        </div>

        <div className="hidden max-[768px]:block max-[768px]:absolute max-[768px]:top-0 max-[768px]:right-0 max-[768px]:transform max-[768px]:-translate-x-full max-[768px]:translate-y-full max-[768px]:text-2xl max-[768px]:cursor-pointer max-[768px]:text-white">
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </div>

        <div className="w-full flex items-center justify-center gap-8 px-1 list-none max-[768px]:hidden">
          <Link
            href="#about"
            className="text-white font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-purple-600 active:border-b-2 border-purple-600"
          >
            {" "}
            About{" "}
          </Link>
          <Link
            href="#skills"
            className="text-white font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-purple-600 active:border-b-2 border-purple-600"
          >
            {" "}
            Skills{" "}
          </Link>
          <Link
            href="#experience"
            className="text-white font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-purple-600 active:border-b-2 border-purple-600"
          >
            {" "}
            Experience{" "}
          </Link>
          {/* <Link href="#projects" className="text-white font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-purple-600 active:border-b-2 border-purple-600"> Projects </Link> */}
          <Link
            href="#education"
            className="text-white font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-purple-600 active:border-b-2 border-purple-600"
          >
            {" "}
            Education{" "}
          </Link>
        </div>

        <div className="w-4/5 h-full flex justify-end items-center px-1.5 max-[768px]:hidden">
          <Link
            href={Bio.github}
            target="_blank"
            className="flex items-center justify-center h-[70%] rounded-[20px] border border-[#854ce6] text-[#854ce6] cursor-pointer px-[20px] font-medium text-[16px] transition-all duration-600 ease-in-out hover:bg-purple-600 hover:text-white max-[768px]:text-[14px] "
          >
            Github Profile
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="hidden max-[768px]:block">
          {isOpen && (
            <div className="bg-[#191924] flex flex-col justify-center items-center gap-4 absolute top-20 right-0 w-full py-3 px-10 transition-all duration-200 ease-in-out text-white rounded-b-lg shadow-md opacity-100 z-50">
              <Link
                href="#about"
                className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-purple-600 active:border-b-2 border-purple-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                {" "}
                About{" "}
              </Link>

              <Link
                href="#skills"
                className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-purple-600 active:border-b-2 border-purple-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                {" "}
                Skills{" "}
              </Link>

              <Link
                href="#experience"
                className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-purple-600 active:border-b-2 border-purple-600"
                onClick={() => setIsOpen(!isOpen)}
              >
                {" "}
                Experience{" "}
              </Link>

              <Link
                href="#projects"
                className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-purple-600 active:border-b-2 border-purple-600"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Projects
              </Link>
              <Link
                href="#education"
                className="text-[#F2F3F4] font-medium cursor-pointer transition-all duration-200 ease-in-out no-underline hover:text-purple-600 active:border-b-2 border-purple-600"
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                Education
              </Link>
              <Link
                href={Bio.github}
                className=" rounded-full border border-[#854ce6] text-[#854ce6] cursor-pointer px-5 py-2.5 font-medium  transition-all duration-200 ease-in-out no-underline"
                target="_blank"
              >
                Github Profile
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
