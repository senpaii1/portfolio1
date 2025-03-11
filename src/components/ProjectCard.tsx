
import Image from "next/image";
import { FC } from "react";
import ProjectCardContainer from "./csr-components/ProjectCardContainer";

export type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    webapp: string;
};

type ProjectCardsProps = {
    project: Project;
};

const ProjectCards: FC<ProjectCardsProps> = ({ project }) => {

    return (
        <ProjectCardContainer project={project}>
            <Image width={290} height={180} className="w-full h-[180px] bg-white rounded-lg shadow-[0_0_16px_2px_rgba(0,0,0,0.3)]" src={project.image} alt="project thumbnail" />
            <div className="w-full flex items-center flex-wrap gap-2 mt-1">
                {project.tags?.map((tag, index) => (
                    <div className="text-xs font-normal text-primary bg-[rgba(133,76,230,0.082)] p-[2px_8px] rounded-lg" key={index}>{tag}</div>
                ))}
            </div>
            <div className="w-full flex flex-col gap-0 py-0 px-0.5">
                <div className="text-xl font-semibold text-text_secondary overflow-hidden max-w-full line-clamp-2">{project.title}</div>
                <div className="font-normal text-[rgba(177,178,179,0.6)] overflow-hidden mt-2 max-w-full line-clamp-3">{project.description}</div>
            </div>
            <button className="opacity-0 group-hover:opacity-100 w-full p-2.5 bg-white text-black text-base font-bold border-none rounded-lg cursor-pointer transition-opacity duration-300 ease-in-out">
                View Project
            </button>
        </ProjectCardContainer>
    )
}

export default ProjectCards

