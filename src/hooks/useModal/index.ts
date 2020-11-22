import { useState, useEffect } from "react";

export default function useModal(cb: () => void) {
  const [isLast, setIsLast] = useState<boolean>(true);
  const handleClose = () => {
    if (isLast) {
      cb();
    } else {
      setIsLast(true);
    }
  };
  const handleOpen = () => setIsLast(false);

  useEffect(() => {
    const handleKeyUp = (e: KeyboardEvent) => {
      e.preventDefault();
      if (e.key === "Escape" && isLast) {
        cb();
      }
    };
    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [isLast, cb]);
  return { isLast, handleClose, handleOpen };
}
