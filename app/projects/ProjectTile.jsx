import Image from "next/image";

export default function ProjectTile({ title, description, logo, link }) {
  return (
    <a href={link} target="_blank">
      <div className=" p-5 backdrop-blur-lg bg-slate-400/20 rounded-2xl shadow-md hover:scale-105 hover:shadow-lg transition duration-200">
        {logo && (
          <Image src={logo} alt={title} width={200} height={200} priority />
        )}
        <h2 className=" text-3xl p-2">{title}</h2>
        <p>{description}</p>
      </div>
    </a>
  );
}