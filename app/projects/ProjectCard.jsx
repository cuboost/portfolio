"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function ProjectTile({ title, overview, logo, link, id }) {
  const [detailedMode, setDetailedMode] = useState(false);

  return (
    <div
      className={` relative p-5 px-8 backdrop-blur-lg bg-slate-400/20 flex items-center gap-5 sm:gap-10 lg:gap-5 rounded-2xl shadow-md duration-200 cursor-pointer ${
        detailedMode
          ? "lg:col-span-2"
          : "hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm"
      }`}
      onClick={() => setDetailedMode(!detailedMode)}
    >
      <Image
        src={logo}
        alt={title}
        width={200}
        height={200}
        className=" w-24 h-24 lg:w-20 lg:h-20 select-none"
        draggable="false"
        priority
      />

      <div className="text-left">
        <h2 className="text-3xl py-2">{title}</h2>
        {detailedMode && (
          <div>
            <p>{overview}</p>
            {id != "portfolio" && (
              <div className="  hover:font-medium active:font-semibold duration-200">
                <Link href={`/projects/${id}`}>Learn more</Link>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
