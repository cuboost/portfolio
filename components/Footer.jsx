import { SiGithub, SiReplit } from "react-icons/si";
import PlatformIcons from "./PlatformIcons";

export default function Footer() {
    return (
        <footer className="text-center p-6 mt-10">
            {/* Line */}
            <hr className=" border-2 border-solid border-teal-600 my-5 mx-20 rounded-md md:mx-40 lg:mx-90" />

            {/* Credits */}
            <h4 className=" p-2 text-gray-800 dark:text-slate-300">Made by Cuboost</h4>

            {/* Date */}
            <h6 className=" p-2 text-gray-800 dark:text-slate-300">Last updated on May 3, 2023</h6>

            {/* Platform Icons */}
            <PlatformIcons />
        </footer>
    );
};