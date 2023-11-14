"use client";

import Link from "next/link";
import { projectsList } from "../projects-list";
import { BsBoxArrowUpRight } from "react-icons/bs";

export default function Project({ params }) {
  const projectId = params.project;

  const projectInfo = projectsList.find((project) => project.id == projectId);

  return (
    <div>
      <h1>{projectInfo.name}</h1>
      <h4 className=" text-center py-2">{projectInfo.overview}</h4>
      <div className="flex justify-center my-5">
        <a href={projectInfo.link} target="_blank" rel="noopener noreferrer">
          <BsBoxArrowUpRight className=" text-2xl" />
        </a>
      </div>
      <p></p>
    </div>
  );
}
