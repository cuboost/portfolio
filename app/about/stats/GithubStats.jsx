import Image from "next/image";

export default function Stats() {
  return (
    <div>
      <a href="https://github.com/cuboost" target="blank">
        <picture className="flex justify-center mb-5 select-none">
          <source
            srcSet={
              "https://github-readme-stats.vercel.app/api?username=cuboost&theme=dark&text_color=0d9489&hide_border=true&border_radius=20"
            }
            media="(prefers-color-scheme: dark)"
          />
          <Image
            src={
              "https://github-readme-stats.vercel.app/api?username=cuboost&text_color=0d9489&hide_border=true&border_radius=20&title_color=0c857b"
            }
            alt="Github Stats"
            width={449}
            height={193}
            draggable="false"
            priority
            className=" border-4 border-teal-600 rounded-3xl w-5/6 sm:w-4/6 xl:w-7/12 max-w-lg"
          />
        </picture>
      </a>
    </div>
  );
}
