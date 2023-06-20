import Image from "next/image";

export default function ProjectTile({ title, description, logo, link }) {
  return (
    <a href={link} target="_blank">
      <div className=" p-5 px-8 backdrop-blur-lg bg-slate-400/20 flex items-center gap-5 sm:gap-10 lg:gap-5 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg active:scale-95 active:shadow-sm duration-200 cursor-pointer">
        <Image
          src={logo}
          alt={title}
          width={200}
          height={200}
          className=" w-24 h-24 lg:w-20 lg:h-20"
          priority
        />

        <div className="text-left">
          <h2 className="text-3xl py-2">{title}</h2>
          {/* <p>{description}</p> */}
        </div>
      </div>
    </a>
  );
}
