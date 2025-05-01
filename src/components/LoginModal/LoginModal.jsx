import "./LoginModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function LoginModal({ handleModalClose, isOpen, handleSignUpSwitch }) {
  return (
    <ModalWithForm
      handleModalClose={handleModalClose}
      title="login"
      isOpen={isOpen}
    >
      <form className="modal__form">
        <label htmlFor="username" className="modal__label">
          username
          <input
            type="text"
            placeholder="username here"
            id="username"
            className="modal__input"
          />
        </label>
        <label htmlFor="password" className="modal__label">
          password
          <input
            type="password"
            placeholder="password here"
            id="password"
            className="modal__input"
          />
        </label>
        <div className="button__container">
          <button type="submit" className="modal__submit-btn">
            Sign in
          </button>
          <p className="modal__button-text">don't have an account &#8594;</p>
          <button
            type="button"
            onClick={handleSignUpSwitch}
            className="modal__change-form"
          >
            Register Account
          </button>
        </div>
      </form>
    </ModalWithForm>
  );
}

export default LoginModal;
