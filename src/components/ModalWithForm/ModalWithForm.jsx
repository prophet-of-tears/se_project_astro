import "./ModalWithForm.css";

function ModalWithForm({ children, handleModalClose, isOpen, title }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__container">
        <div className="modal__header">
          <h2 className="modal__title">{title}</h2>
          <button
            type="button"
            onClick={handleModalClose}
            className="modal__close"
          ></button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default ModalWithForm;
