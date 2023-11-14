import { SiGithub, SiReplit } from "react-icons/si";
import { FaGoogle } from "react-icons/fa";

export default function PlatformIcons({ size }) {
  const platfotmIcons = [
    { id: 1, link: "https://github.com/cuboost", icon: <SiGithub /> },
    { id: 2, link: "https://replit.com/@Cuboost", icon: <SiReplit /> },
    { id: 3, link: "https://g.dev/cuboost", icon: <FaGoogle /> },
  ];

  return (
    <div
      className={`${size} pt-2 flex justify-center gap-16 text-gray-600 dark:text-slate-200`}
    >
      {platfotmIcons.map((icon) => (
        <a
          href={icon.link}
          key={icon.id}
          target={"_blank"}
          className="platform-icon"
        >
          {icon.icon}
        </a>
      ))}
    </div>
  );
}
