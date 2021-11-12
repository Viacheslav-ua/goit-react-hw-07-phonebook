/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { createPortal } from "react-dom";

import S from "./Modal.module.css";

const modalRoot: any = document.querySelector("#modal-root");
interface PropsType {
  onClose: any;
  children: React.ReactChild | React.ReactNode;
}
const Modal: React.FC<PropsType> = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={S.backdrop} onClick={handleBackdropClick}>
      <div className={S.content}>{children}</div>
    </div>,
    modalRoot
  );
};
export default Modal;
