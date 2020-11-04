import React from "react";
import "./styles.css";

interface Props {
  content: React.ReactElement | string;
  closeModal: (id: string) => void;
  id: string;
  cb: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: string) => void;
}

const Modal: React.FC<Props> = ({ content, closeModal, id, cb }) => {
  return (
    <div className="modal">
      <button
        type="button"
        className="close-button"
        onClick={() => closeModal(id)}
        id={id}
      >
        X
      </button>
      <div>{content}</div>
      <div>
        <button onClick={(e) => cb(e, id)} className="callback-button">
          выполнить колбек
        </button>
      </div>
    </div>
  );
};

export default Modal;
