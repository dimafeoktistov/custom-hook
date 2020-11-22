import React from "react";
import ModalB from "../ModalB";
import useModal from "../../hooks/useModal";

interface Props {
  cb: () => void;
}

const ModalA: React.FC<Props> = (props) => {
  const { isLast, handleClose, handleOpen } = useModal(props.cb);
  return (
    <div className="modal">
      <button type="button" className="close-button" onClick={handleClose}>
        X
      </button>
      <div>Модальное окно типа A</div>
      <button onClick={() => alert("Колбек на модалке типа А")}>
        кнопка для модалки А
      </button>
      {isLast ? (
        <div>
          <button onClick={handleOpen} className="callback-button">
            Создать модальное окно
          </button>
        </div>
      ) : (
        <ModalB cb={handleClose} />
      )}
    </div>
  );
};

export default ModalA;
