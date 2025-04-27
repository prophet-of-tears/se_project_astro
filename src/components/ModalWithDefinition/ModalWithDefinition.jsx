import "./ModalWithDefinition.css";

function ModalWithDefinition({ isOpen, children, handleModalClose }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <button onClick={handleModalClose} className="modal__close"></button>
        {children}
      </div>
    </div>
  );
}

export default ModalWithDefinition;
