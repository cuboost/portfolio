import ProjectTile from "./ProjectCard";
import cuboostProjects from "/public/images/projects.svg";
import Image from "next/image";
import PlatformIcons from "../components/PlatformIcons";
import { projectsList } from "./projects-list";

export default function Projects() {
  return (
    <div className=" text-center">
      {/* Title */}
      <h1>Projects</h1>

      {/* Description */}
      <div className="flex flex-col justify-evenly items-center mt-2 mb-10 sm:flex-row">
        <Image
          src={cuboostProjects}
          alt="Image of Cuboost coding"
          className=" w-3/4 select-none m-2 mx-auto sm:w-1/2 lg:w-2/5"
          draggable="false"
          priority
        />
        <div>
          <p className="text-lg p-5 px-8 leading-8 text-gray-800 dark:text-slate-300">
            Here are some of my projects. All of my coding is available via
            Github and Replit.
          </p>
          <PlatformIcons size="text-2xl" />
        </div>
      </div>

      {/* Projects */}
      <div className="inline-grid gap-8 w-11/12 lg:grid-cols-2">
        {projectsList.map((project) => (
          <ProjectTile
            key={project.id}
            link={project.link}
            title={project.name}
            overview={project.overview}
            logo={project.logo}
            id={project.id}
          />
        ))}
      </div>
    </div>
  );
}
