import ProjectTile from "../ProjectTile";
import cuboostProjects from "/public/images/projects.svg";
import Image from 'next/image';
import PlatformIcons from "../PlatformIcons";

export default function Projects() {

    return (
        <div className=' text-center'>
            {/* Title */}
            <h1 className=' text-5xl p-6'>Projects</h1>

            {/* Description */}
            <div className='flex flex-col justify-evenly items-center mt-2 mb-10 sm:flex-row'>
                <Image src={cuboostProjects} alt='Image of Cuboost coding' className=' w-3/4 select-none m-2 mx-auto sm:w-1/2 lg:w-2/5' draggable="false" />
                <div>
                    <p className='text-lg p-5 px-8 leading-8 text-gray-800 dark:text-slate-300'>
                        Here are some of my projects. All of my coding is available via Github and Replit.
                    </p>
                    <PlatformIcons />
                </div>
            </div>

            {/* Projects */}
            <div className="inline-grid gap-8 w-10/12 lg:grid-cols-2">
                <ProjectTile link="fhdjskfhj" title="Test" description="hjdhfkjsdf" image="dfnds" />
                <ProjectTile link="fhdjskfhj" title="Test" description="hjdhfkjsdf" image="dfnds" />
                <ProjectTile link="fhdjskfhj" title="Test" description="hjdhfkjsdf" image="dfnds" />
                <ProjectTile link="fhdjskfhj" title="Test" description="hjdhfkjsdf" image="dfnds" />
                <ProjectTile link="fhdjskfhj" title="Test" description="hjdhfkjsdf" image="dfnds" />
            </div>
        </div>
    );
}
