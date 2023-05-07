import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div>
            {/* Nav */}
            <nav className=' fixed mx-auto sm:p-10 p-4 py-8 mt-2 mb-12 z-50 flex justify-between items-center w-10/12 md:w-9/12 lg:w-8/12 backdrop-blur-lg bg-slate-300/30 rounded-3xl select-none'>
                <Link href="/">
                    <h1 className=' text-2xl cursor-pointer font-secularOne select-none transition duration-500 ease-in-out hover:text-teal-500 active:text-teal-600 dark:hover:text-slate-200 dark:active:text-slate-300 md:text-3xl'>CUBOOST</h1>
                </Link>
                <ul className=' flex items-center gap-2 ml-2 text-lg sm:text-xl md:text-2xl md:gap-4 lg:gap-6'>
                    <li className="cursor-pointer transition duration-500 ease-in-out hover:text-teal-500 active:text-teal-600 dark:hover:text-slate-200 dark:active:text-slate-300">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="cursor-pointer transition duration-500 ease-in-out hover:text-teal-500 active:text-teal-600 dark:hover:text-slate-200 dark:active:text-slate-300">
                        <Link href="/about">About</Link>
                    </li>
                    <li className="cursor-pointer transition duration-500 ease-in-out hover:text-teal-500 active:text-teal-600 dark:hover:text-slate-200 dark:active:text-slate-300">
                        <Link href="/projects">Projects</Link>
                    </li>
                    <li>
                        <a className=' text-base ml-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:drop-shadow-lg active:drop-shadow-xl text-white px-4 py-2 rounded-md select-none transition duration-500 ease-in-out' href="https://github.com/cuboost" target={"_blank"}>Github</a>
                    </li>
                </ul>

                <FiMenu className=" sm:hidden text-3xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
            </nav>

            {/* Dummy */}
            <div className="top-0 p-14 mb-10"></div>
        </div>
    );
}