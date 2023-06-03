import Stats from "./GithubStats";
import Tools from "./tools/Tools";
import cuboostAbout from "/public/images/about.svg";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <main className=" text-center">
        {/* Title */}
        <h1>About Me</h1>

        {/* Description */}
        <div className="flex flex-col justify-evenly items-center sm:flex-row">
          <Image
            src={cuboostAbout}
            alt="Image of Cuboost coding"
            className=" w-3/4 select-none m-2 mx-auto sm:w-1/2 lg:w-2/5"
            draggable="false"
          />
          <p className="text-lg p-5 px-8 leading-8 text-gray-800 dark:text-slate-300">
            I love coding. I am always excited to start new projects, however, I
            don&apos;t have enough time to finish them. So a lot of my projects
            are half finished...
          </p>
        </div>

        {/* Github Stats */}
        <h2>
          <span className="text-teal-600">Github</span> Stats
        </h2>
        <Stats />

        {/* Tools, languages, and frameworks I use */}
        <Tools />
      </main>
    </div>
  );
}
