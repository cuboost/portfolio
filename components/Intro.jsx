import Image from 'next/image';
import { AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import cuboost from "../public/images/cuboost.png";

export default function Summary() {
    return (
        <section className='relative'>
            <div className=' relative mx-auto bg-gradient-to-tr from-teal-500 rounded-full w-60 h-60 mb-5 p-6 select-none md:h-72 md:w-72'>
                <Image src={cuboost} draggable="false" alt='Cuboost Icon' priority />
            </div>
            <div className=' text-center p-5'>
                <h2 className=' text-5xl py-2 text-teal-600 font-medium'>CUBOOST</h2>
                <h3 className=' text-2xl py-2'>Web and Game Developer</h3>
                <p className=' text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-slate-300'>
                    👋 Hi, I&apos;m the creator of Cuboost. I work alone to create simple things that can help us in our everyday life. My initial <a className=' text-teal-500' href="https://cuboost-website.web.app/">website</a> with my first creations.
                </p>
            </div>
            <div className='text-5xl flex justify-center gap-16 pb-10 text-gray-600'>
                <a href="https://github.com/cuboost" target={'_blank'} className="transition duration-500 ease-in-out hover:text-teal-500">
                    <AiFillGithub />
                </a>
                <a href="https://cuboost-website.web.app/" target={'_blank'} className="transition duration-500 ease-in-out hover:text-teal-500">
                    <CgWebsite />
                </a>
            </div>
        </section>
    );
}