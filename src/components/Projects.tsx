import { projects } from "@/data/constants"
import ProjectCards from "./ProjectCard";

const Projects = () => {
    return (
        <div id="projects" className="projectContainer">
            <div className="relative flex justify-between items-center flex-col w-full max-w-[1350px] py-[10px] pb-[100px] gap-[12px]">
                <div className="text-[42px] text-center font-semibold mt-[20px] text-text_primary max-[768px]:mt-3 max-[768px]:text-[32px]">Projects</div>
                <div className="text-[18px] text-center max-w-[600px] text-text_secondary max-[768px]:mt-3 max-[768px]:text-base">
                    Here are some of my projects I have worked on.
                </div>
                <div className="flex justify-center items-center gap-[28px] mt-[40px] flex-wrap">
                    {projects.map((project, index) => (
                        <ProjectCards key={index} project={project} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Projects
