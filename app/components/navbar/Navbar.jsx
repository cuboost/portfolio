"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { linksList } from "./links-list";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // If screen is bigger than tailwind sm
    if (innerWidth > 640) {
      setIsOpen(true);
    }
  }, [isOpen]);

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

  const UlVariants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const LiVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      x: -40,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  };

  return (
    <div className=" ">
      {/* Nav */}
      <motion.nav
        initial={{ y: -150 }}
        animate={{ y: 0 }}
        className=" fixed sm:p-10 p-6 py-8 mt-2 mb-12 z-50 flex justify-between items-center w-10/12 md:w-9/12 lg:w-8/12 backdrop-blur-lg bg-slate-300/30 rounded-3xl select-none"
      >
        <motion.div
          transition={{
            type: "tween",
            delay: 0,
            duration: 0.2,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
        >
          <Link href="/">
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "tween",
                delay: 0.5,
              }}
              className="text-2xl cursor-pointer select-none transition duration-500 p-0 ease-in-out hover:text-teal-600 active:text-teal-700 dark:hover:text-slate-300 dark:active:text-slate-400 md:text-3xl"
            >
              CUBOOST
            </motion.h2>
          </Link>
        </motion.div>
        <motion.ul
          initial={false}
          animate={isOpen ? "open" : "closed"}
          variants={UlVariants}
          className={`items-center justify-center gap-4 ml-2 flex-col sm:flex-row text-lg lg:text-xl md:gap-4 lg:gap-6 ${
            isOpen ? "flex" : "hidden"
          }`}
        >
          {linksList.map((link) => (
            <motion.li
              variants={LiVariants}
              key={link.id}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer transition duration-300 ease-in-out hover:text-teal-600 active:text-teal-700 dark:hover:text-slate-200 dark:active:text-slate-300 relative group overflow-hidden flex items-center justify-center gap-1 flex-wrap"
            >
              <Link href={link.link} className=" p-[1px]">
                {link.name}
              </Link>
              <div className=" bg-teal-600 dark:bg-slate-200 group-active:bg-teal-700 dark:group-hover:bg-slate-200 dark:group-active:bg-slate-300 duration-300 group-hover:translate-x-full group-hover:opacity-100 h-[2px] absolute bottom-0 w-full right-full rounded-full opacity-0" />
            </motion.li>
          ))}

          {/* Workkkkkk */}
          <motion.a
            variants={LiVariants}
            transition={{ delay: 0.5 }}
            href="https://github.com/cuboost"
            target={"_blank"}
          >
            <button className=" text-lg lg:text-xl">Github</button>
          </motion.a>
        </motion.ul>

        <span
          className=" sm:hidden text-3xl cursor-pointer hover:scale-105 active:scale-75 transition duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CgClose /> : <FiMenu />}
        </span>
      </motion.nav>

      {/* Dummy for layout */}
      <div className="top-0 p-16 mb-4"></div>
    </div>
  );
}
