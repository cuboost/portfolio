import { SiGithub, SiReplit } from "react-icons/si";

export default function PlatformIcons({ size }) {
  return (
    <div
      className={`${size} pt-2 flex justify-center gap-16 text-gray-600 dark:text-slate-200`}
    >
      <a
        href="https://github.com/cuboost"
        target={"_blank"}
        className="platform-icon"
      >
        <SiGithub />
      </a>
      <a
        href="https://replit.com/@Cuboost"
        target={"_blank"}
        className="platform-icon"
      >
        <SiReplit />
      </a>
    </div>
  );
}
