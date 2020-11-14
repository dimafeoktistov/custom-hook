import React, { useState, useEffect } from "react";
import Modal from "../../components/Modal";
import "./styles.css";

interface ModalProps {
  id: string;
  content: React.ReactElement | string;
  cb: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => void;
}

const uuidv4 = (): string => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

const useModals = (
  cb: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => void
) => {
  const [modalsProps, setModalsProps] = useState<ModalProps[]>([]);
  const closeModal = (id: string): void => {
    setModalsProps(modalsProps.filter((mProp: ModalProps) => mProp.id !== id));
  };

  useEffect(() => {
    const closeLastModal = (): void => {
      const res = modalsProps.slice(0, -1);
      setModalsProps(res);
    };
    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.keyCode === 27) {
        closeLastModal();
      }
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  });

  const createModal = (): void => {
    const id = uuidv4();
    setModalsProps([
      ...modalsProps,
      { cb, id, content: `Контент модального окна c id: ${id}` },
    ]);
  };

  const Modals: React.FC = () => {
    return (
      <div className="modals">
        {modalsProps.map((modalProp: ModalProps) => (
          <Modal {...modalProp} closeModal={closeModal} key={modalProp.id} />
        ))}
      </div>
    );
  };

  return { Modals, createModal };
};

export default useModals;
