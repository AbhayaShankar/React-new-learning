import React from "react";
import { FaTimes } from "react-icons/fa";
import { useCustomContext } from "../Context/Context";

export default function Modal() {
  const { isModalOpen, closeModal } = useCustomContext();

  return (
    <div className={`modal-overlay ${isModalOpen ? "show-modal" : null}`}>
      <div className="modal-container">
        <button onClick={closeModal} className="close-modal-btn">
          <FaTimes />
        </button>
        <h3>Modal Content</h3>
      </div>
    </div>
  );
}
