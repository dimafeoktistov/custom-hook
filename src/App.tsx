import React from "react";
import "./App.css";

import useModals from "./hooks/useModals";

function App() {
  const doSomething = (e: React.MouseEvent, id: string) => {
    alert(`Колбек выполнен на модальном окне с id = ${id}`);
  };
  const { Modals, createModal } = useModals(doSomething);

  return (
    <div className="App">
      <button className="open-button" onClick={createModal}>
        Создать окно
      </button>
      <Modals />
    </div>
  );
}

export default App;
