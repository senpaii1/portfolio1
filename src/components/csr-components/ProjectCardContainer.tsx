"use client"
import { FC, ReactNode } from "react";
import { useModal } from "./ModalProvider";
import { Project } from "../ProjectCard";

type ProjectContainerProps = {
    project: Project;
    children: ReactNode
};

const ProjectCardContainer: FC<ProjectContainerProps> = ({ project, children }) => {
    const { openModal } = useModal();
    return (
        <div className="group w-[330px] h-[480px] bg-card cursor-pointer rounded-lg shadow-[0_0_12px_4px_rgba(0,0,0,0.4)] overflow-hidden py-[26px] px-[20px] flex flex-col gap-[14px] transition-all duration-500 ease-in-out hover:translate-y-[-10px] hover:shadow-[0_0_50px_4px_rgba(0,0,0,0.6)] hover:brightness-110"
            onClick={() => openModal(project)}>
            {children}
        </div>
    )
}

export default ProjectCardContainer