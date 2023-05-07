import { SiGithub, SiReplit } from "react-icons/si";

export default function PlatformIcons() {
    return (
        <div className='text-xl pt-2 flex justify-center gap-16 text-gray-600 dark:text-slate-200'>
            <a href="https://github.com/cuboost" target={'_blank'} className="transition duration-500 ease-in-out hover:text-teal-500">
                <SiGithub />
            </a>
            <a href="https://replit.com/@Cuboost" target={'_blank'} className="transition duration-500 ease-in-out hover:text-teal-500">
                <SiReplit />
            </a>
        </div>
    );
};