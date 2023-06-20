import Image from "next/image";

export default function LanguageStats() {
  return (
    <picture className="flex justify-center mb-6 select-none">
      <source
        srcSet={
          "https://github-readme-stats.vercel.app/api/top-langs/?username=cuboost&theme=dark&text_color=0d9489&hide_border=true&border_radius=20&layout=compact"
        }
        media="(prefers-color-scheme: dark)"
      />
      <Image
        src={
          "https://github-readme-stats.vercel.app/api/top-langs/?username=cuboost&text_color=0d9489&hide_border=true&border_radius=20&title_color=0c857b&layout=compact"
        }
        alt="Github Stats"
        width={449}
        height={193}
        draggable="false"
        priority
        className=" border-4 border-teal-600 rounded-3xl w-4/6 md:w-3/6 xl:w-3/5 mb-4"
      />
    </picture>
  );
}
