import Image from "next/image";
import Grid from "./Grid";
import ToolCard from "./ToolCard";
import { frameworksAndLibrariesList } from "./lists/frameworks-and-libraries-list";
import { languagesList } from "./lists/languages-list";
import { toolsList } from "./lists/toolsList";
import { idesList } from "./lists/idesList";
import { browsersList } from "./lists/browsersList";
import { osList } from "./lists/osList";

export default function Tools() {
  return (
    <div>
      <h2 className="pt-20">
        <span className="text-teal-600">Languages</span> I Use
      </h2>
      <picture className="flex justify-center mb-10">
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
          loading="eager"
          draggable="false"
          priority
          className=" border-4 border-teal-600 rounded-3xl w-4/6 md:w-3/6 xl:w-5/12"
        />
      </picture>
      <Grid>
        {languagesList.map((language) => (
          <ToolCard
            key={language.id}
            icon={language.icon}
            name={language.name}
            link={language.link}
          />
        ))}
      </Grid>

      <h2 className="pt-20">
        <span className="text-teal-600">Frameworks and Libraries</span> I Use
      </h2>
      <Grid>
        {frameworksAndLibrariesList.map((library) => (
          <ToolCard
            key={library.id}
            icon={library.icon}
            name={library.name}
            link={library.link}
          />
        ))}
      </Grid>

      <h2 className="pt-20">
        <span className="text-teal-600">Tools</span> I Use
      </h2>
      <Grid>
        {toolsList.map((tool) => (
          <ToolCard
            key={tool.id}
            icon={tool.icon}
            name={tool.name}
            link={tool.link}
          />
        ))}
      </Grid>

      <h2 className="pt-20">
        <span className="text-teal-600">IDEs</span> I Use
      </h2>
      <Grid>
        {idesList.map((ide) => (
          <ToolCard
            key={ide.id}
            icon={ide.icon}
            name={ide.name}
            link={ide.link}
          />
        ))}
      </Grid>

      <h2 className="pt-20">
        <span className="text-teal-600">Browsers</span> I Use
      </h2>
      <Grid>
        {browsersList.map((browser) => (
          <ToolCard
            key={browser.id}
            icon={browser.icon}
            name={browser.name}
            link={browser.link}
          />
        ))}
      </Grid>

      <h2 className="pt-20">
        <span className="text-teal-600">OS&apos;s</span> I Use
      </h2>
      <Grid>
        {osList.map((os) => (
          <ToolCard key={os.id} icon={os.icon} name={os.name} link={os.link} />
        ))}
      </Grid>
    </div>
  );
}
