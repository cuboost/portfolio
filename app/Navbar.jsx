"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // If screen is bigger than tailwind sm
    if (innerWidth > 640) {
      setIsOpen(true);
    }
  }, []);

  useEffect(() => {
    // On resize
    window.addEventListener("resize", () => {
      if (innerWidth > 639) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    });
  });

  return (
    <div>
      {/* Nav */}
      <nav className=" fixed mx-auto sm:p-10 p-4 py-8 mt-2 mb-12 z-50 flex justify-between items-center w-10/12 md:w-9/12 lg:w-8/12 backdrop-blur-lg bg-slate-300/30 rounded-3xl select-none">
        <Link href="/">
          <h2 className="text-2xl cursor-pointer font-secularOne select-none transition duration-500 p-0 ease-in-out hover:text-teal-500 active:text-teal-600 dark:hover:text-slate-200 dark:active:text-slate-300 md:text-3xl hover:scale-105 active:scale-95">
            CUBOOST
          </h2>
        </Link>
        <ul
          className={`items-center justify-center gap-4 ml-2 flex-col sm:flex-row text-lg lg:text-xl md:gap-4 lg:gap-6 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <a href="https://github.com/cuboost" target={"_blank"}>
            <button className=" text-lg lg:text-xl">Github</button>
          </a>
        </ul>

        <span
          className=" sm:hidden text-3xl cursor-pointer hover:scale-105 active:scale-75 transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CgClose /> : <FiMenu />}
        </span>
      </nav>

      {/* Dummy for layout */}
      <div className="top-0 p-14 mb-10"></div>
    </div>
  );
}
