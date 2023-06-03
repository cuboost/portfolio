import Image from "next/image";
import { SiGithub, SiReplit } from "react-icons/si";
import cuboost from "../public/images/cuboost.png";
import PlatformIcons from "./PlatformIcons";

export default function Summary() {
  return (
    <section className="relative">
      <div className=" relative mx-auto bg-gradient-to-tr from-teal-500 rounded-full w-60 h-60 mb-5 p-6 select-none md:h-72 md:w-72">
        <Image src={cuboost} draggable="false" alt="Cuboost Icon" priority />
      </div>
      <div className=" text-center p-5">
        <h1 className="py-2 text-teal-600 font-medium">CUBOOST</h1>
        <h3 className=" text-2xl py-2">Front-end Developer</h3>
        <p className=" text-lg py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-slate-300">
          👋 Hi, I&apos;m the creator of{" "}
          <span className=" text-teal-500">Cuboost</span>. I work alone to
          create simple things that can help us in our everyday life. I am a
          self-taught <span className=" text-teal-500">front-end</span>{" "}
          developer, and I mainly work with React. Web developing is really my
          thing, even thought I also do a little bit of{" "}
          <span className=" text-teal-500">game development</span> and{" "}
          <span className=" text-teal-500">app development</span>...
        </p>
      </div>
      <PlatformIcons size="text-5xl" />
    </section>
  );
}
