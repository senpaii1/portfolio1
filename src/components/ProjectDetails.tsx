"use client";
import { Modal } from "@mui/material";
import { IoMdClose } from "react-icons/io";
import { useModal } from "./csr-components/ModalProvider";
import Image from "next/image";
import Link from "next/link";

const ProjectDetails = () => {
    const { isModalOpen, closeModal, modalData } = useModal();
    const project = modalData;
    return (
        <Modal open={isModalOpen} onClose={closeModal}>
            <div className="w-full h-full absolute top-0 left-0 bg-black bg-opacity-70 flex items-start justify-center overflow-y-scroll transition-all duration-500">
                <div className="max-w-3xl w-full rounded-2xl my-12 mx-3 h-min bg-card text-text_primary p-5 flex flex-col relative">
                    <IoMdClose className="text-2xl absolute top-[10px] right-[20px] cursor-pointer"
                        onClick={closeModal}
                    />
                    <Image
                        width={300}
                        height={300}
                        className="w-full object-cover rounded-xl mt-7 shadow-lg "
                        src={project?.image}
                        alt="project-image"
                    />
                    <div className="text-2xl font-semibold text-text_primary mt-2 mx-[6px] mb-0 max-[600px]:text-2xl max-[600px]:m-[6px] max-[600px]:mb-0 ">
                        {project?.title}
                    </div>
                    <div className="text-base my-1 mx-1 font-normal text-text_secondary max-[768px]:text-xs">
                        {project?.date}
                    </div>
                    <div className="flex flex-wrap my-2 max-[600px]:my-1">
                        {project?.tags.map((tag: any, index: number) => (
                            <div
                                key={index}
                                className="text-sm font-normal text-primary m-1 py-1 px-2 rounded-lg bg-[rgba(133,76,230,0.125)] max-[600px]:text-xs "
                            >
                                {tag}
                            </div>
                        ))}
                    </div>
                    <div className="text-base font-normal text-text_primary my-2 mx-[6px] max-[600px]:m-[6px] max-[600px]:text-sm">
                        {project?.description}
                    </div>

                    <div className="flex justify-end my-3 gap-3">
                        <Link
                            href={project?.github}
                            target="new"
                            className="w-full text-center text-base font-semibold text-text_primary py-3 px-4 rounded-lg cursor-pointer no-underline  transition-all duration-500 ease-linear bg-bgLight hover:bg-[rgba(133,76,230,0.6)] max-[600px]:text-xs"
                        >
                            View Code
                        </Link>
                        <Link
                            href={project?.webapp}
                            target="new"
                            className="w-full text-center text-base font-semibold text-text_primary py-3 px-4 rounded-lg cursor-pointer no-underline  transition-all duration-500 ease-linear bg-primary hover:bg-[rgba(133,76,230,0.6)] max-[600px]:text-xs"
                        >
                            View Live App
                        </Link>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default ProjectDetails;
