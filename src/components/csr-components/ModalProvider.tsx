"use client";
import { createContext, useContext, useState } from "react";
import { ReactNode } from "react";

type ModalContextType = {
  isModalOpen: boolean;
  openModal: (project: any) => void;
  closeModal: () => void;
  modalData: any;
};

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null)

  const openModal = (project: any) => {
    setModalData(project);
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setModalData(null);
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, openModal, closeModal, modalData }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
