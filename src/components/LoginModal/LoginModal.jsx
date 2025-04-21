import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ handleModalClose, isOpen }) {
  return (
    <ModalWithForm
      handleModalClose={handleModalClose}
      title="login"
      isOpen={isOpen}
    >
      <form className="modal__form">
        <label htmlFor="username" className="modal__label">
          <input
            type="text"
            placeholder="username here"
            id="username"
            className="modal__input"
          />
        </label>
        <label htmlFor="password" className="modal__label">
          <input
            type="password"
            placeholder="password here"
            id="password"
            className="modal__input"
          />
        </label>
        <button type="submit" className="modal__submit-btn"></button>
        <button className="modal__change-form"></button>
      </form>
    </ModalWithForm>
  );
}

export default LoginModal;
