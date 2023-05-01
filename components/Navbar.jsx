import Link from "next/link";

export default function Navbar() {

    return (
        <div>
            <nav className=' fixed mx-auto p-10 mt-2 mb-12 z-50 flex justify-between items-center w-10/12 md:w-9/12 lg:w-8/12 backdrop-blur-lg bg-slate-400/30 rounded-3xl'>
                <Link href="/">
                    <h1 className=' text-2xl cursor-pointer font-secularOne select-none transition duration-500 ease-in-out hover:text-teal-500 active:text-teal-600 dark:hover:text-slate-200 dark:active:text-slate-300 md:text-3xl'>CUBOOST</h1>
                </Link>
                <ul className='flex items-center gap-2 ml-2'>
                    <li className="cursor-pointer transition duration-500 ease-in-out text-2xl hover:text-teal-500 active:text-teal-600 dark:hover:text-slate-200 dark:active:text-slate-300">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="cursor-pointer transition duration-500 ease-in-out text-2xl hover:text-teal-500 active:text-teal-600 dark:hover:text-slate-200 dark:active:text-slate-300">
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <a className=' ml-4 bg-gradient-to-r from-cyan-500 to-teal-500 hover:drop-shadow-lg active:drop-shadow-xl text-white px-4 py-2 rounded-md select-none transition duration-500 ease-in-out' href="https://github.com/cuboost" target={"_blank"}>Github</a>
                    </li>
                </ul>
            </nav>

            <div className="top-0 p-14 mb-10"></div>
        </div>
    );
}