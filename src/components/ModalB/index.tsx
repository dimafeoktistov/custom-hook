import React from "react";
import ModalA from "../ModalA";
import useModal from "../../hooks/useModal";

interface Props {
  cb: () => void;
}

const ModalB: React.FC<Props> = (props) => {
  const { isLast, handleClose, handleOpen } = useModal(props.cb);

  return (
    <div className="modal">
      <button type="button" className="close-button" onClick={handleClose}>
        X
      </button>
      <div>Модальное окно типа B</div>
      <button onClick={() => alert("Колбек на модалке типа B")}>
        кнопка с коблеком B
      </button>
      {isLast ? (
        <div>
          <button onClick={handleOpen} className="callback-button">
            Создать модальное окно
          </button>
        </div>
      ) : (
        <ModalA cb={handleClose} />
      )}
    </div>
  );
};

export default ModalB;
