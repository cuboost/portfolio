import { SiAdobe, SiAndroid, SiAndroidstudio, SiCsharp, SiCss3, SiFigma, SiFirebase, SiGithub, SiGooglechrome, SiGooglefonts, SiGreensock, SiHtml5, SiIos, SiJavascript, SiKotlin, SiMacos, SiNextdotjs, SiPexels, SiPython, SiReact, SiSafari, SiTailwindcss, SiUnity, SiVercel, SiVisualstudiocode, SiXcode } from "react-icons/si";
import Image from "next/image";

const Tools = () => {
    return (
        <div>
            <h2 className=" text-4xl p-6"><span className="text-teal-600">Languages</span> I Use</h2>
            <picture className="flex justify-center mb-6">
                <source srcSet={"https://github-readme-stats.vercel.app/api/top-langs/?username=cuboost&theme=dark&text_color=0d9489&hide_border=true&border_radius=20&layout=compact"} media="(prefers-color-scheme: dark)" />
                <Image src={"https://github-readme-stats.vercel.app/api/top-langs/?username=cuboost&text_color=0d9489&hide_border=true&border_radius=20&title_color=0c857b&layout=compact"} alt='Github Stats' width={449} height={193} draggable="false" priority className=' border-4 border-teal-600 rounded-3xl w-4/6 md:w-3/6 xl:w-5/12' />
            </picture>
            <div className="inline-grid grid-cols-2 gap-4 w-10/12 md:grid-cols-3 lg:grid-cols-4">
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl hover:bg-teal-600 h-40 hover:text-white" href="https://html.spec.whatwg.org/multipage/" target={"_blank"}>
                    <SiHtml5 className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Html</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://www.w3.org/Style/CSS/" target={"_blank"}>
                    <SiCss3 className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">CSS</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://www.javascript.com/" target={"_blank"}>
                    <SiJavascript className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Javascript</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://www.python.org/" target={"_blank"}>
                    <SiPython className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Python</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://kotlinlang.org/" target={"_blank"}>
                    <SiKotlin className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Kotlin</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://learn.microsoft.com/en-us/dotnet/csharp/" target={"_blank"}>
                    <SiCsharp className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">C Sharp</p>
                </a>
            </div>

            <h2 className=" text-4xl p-6 pt-20"><span className="text-teal-600">Frameworks and Libraries</span> I Use</h2>
            <div className="inline-grid grid-cols-2 gap-4 w-10/12 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://nextjs.org/" target={"_blank"}>
                    <SiNextdotjs className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Next.js</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://react.dev/" target={"_blank"}>
                    <SiReact className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">React</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://tailwindcss.com/" target={"_blank"}>
                    <SiTailwindcss className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Tailwind CSS</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://greensock.com/" target={"_blank"}>
                    <SiGreensock className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">GreenSock</p>
                </a>
            </div>

            <h2 className=" text-4xl p-6 pt-20"><span className="text-teal-600">Tools</span> I Use</h2>
            <div className="inline-grid grid-cols-2 gap-4 w-10/12 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://firebase.google.com/" target={"_blank"}>
                    <SiFirebase className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Firebase</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://vercel.com/" target={"_blank"}>
                    <SiVercel className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Vercel</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://github.com/" target={"_blank"}>
                    <SiGithub className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Github</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://www.figma.com/" target={"_blank"}>
                    <SiFigma className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Figma</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://fonts.google.com/" target={"_blank"}>
                    <SiGooglefonts className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Google Fonts</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://www.adobe.com/" target={"_blank"}>
                    <SiAdobe className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Adobe</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://www.pexels.com/" target={"_blank"}>
                    <SiPexels className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Pexels</p>
                </a>
            </div>

            <h2 className=" text-4xl p-6 pt-20"><span className="text-teal-600">IDEs</span> I Use</h2>
            <div className="inline-grid grid-cols-2 gap-4 w-10/12 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://code.visualstudio.com/" target={"_blank"}>
                    <SiVisualstudiocode className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">VS Code</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://developer.android.com/studio" target={"_blank"}>
                    <SiAndroidstudio className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Android Studio</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://developer.apple.com/xcode/" target={"_blank"}>
                    <SiXcode className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Xcode</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://unity.com/" target={"_blank"}>
                    <SiUnity className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Unity</p>
                </a>
            </div>

            <h2 className=" text-4xl p-6 pt-20"><span className="text-teal-600">Browsers</span> I Use</h2>
            <div className="inline-grid grid-cols-2 gap-4 w-10/12 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://www.google.com/chrome/" target={"_blank"}>
                    <SiGooglechrome className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Google Chrome</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl hover:bg-teal-600 h-40 hover:text-white" href="https://www.apple.com/safari/" target={"_blank"}>
                    <SiSafari className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Safari</p>
                </a>
            </div>

            <h2 className=" text-4xl p-6 pt-20"><span className="text-teal-600">OS&apos;s</span> I Use</h2>
            <div className="inline-grid grid-cols-2 gap-4 w-10/12 md:grid-cols-3 lg:grid-cols-4 cursor-pointer">
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://www.apple.com/mac/" target={"_blank"}>
                    <SiMacos className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">macOS</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://www.android.com/" target={"_blank"}>
                    <SiAndroid className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">Android</p>
                </a>
                <a className="flex flex-col justify-center items-center transition duration-500 ease-in-out text-teal-600 border-4 border-teal-600 text-center rounded-3xl h-40 hover:bg-teal-600 hover:text-white" href="https://www.apple.com/ios" target={"_blank"}>
                    <SiIos className="text-6xl m-5 mb-0" />
                    <p className=" text-3xl p-3">iOS</p>
                </a>
            </div>
        </div>
    );
};

export default Tools;