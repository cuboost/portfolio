export default function ToolCard({ icon, name, link }) {
  return (
    <a
      className="flex flex-col justify-center items-center h-44 transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl hover:bg-teal-600 hover:text-white select-none"
      href={link}
      target={"_blank"}
      rel="noopener noreferrer"
    >
      <span className="text-6xl m-5 mb-0">{icon}</span>
      <span className=" text-3xl p-3">{name}</span>
    </a>
  );
}
