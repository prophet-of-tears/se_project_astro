import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ handleModalClose, isOpen, handleLoginSwitch }) {
  return (
    <ModalWithForm
      handleModalClose={handleModalClose}
      title="sign up"
      isOpen={isOpen}
    >
      <form action="" className="modal__form">
        <label htmlFor="email" className="modal__label">
          Email
          <input
            type="email"
            placeholder="type email"
            id="email"
            className="modal__input"
          />
        </label>
        <label htmlFor="usermame" className="modal__label">
          username
          <input
            type="text"
            placeholder="type your username"
            id="username"
            className="modal__input"
          />
        </label>
        <label htmlFor="password" className="modal__label">
          password
          <input
            type="password"
            placeholder="tell us your secret"
            id="password"
            className="modal__input"
          />
        </label>
        <div className="button__container">
          <button type="submit" className="modal__submit-btn">
            Sign up
          </button>
          <p className="modal__button-text">Already have an account &#8594;</p>
          <button
            type="button"
            onClick={handleLoginSwitch}
            className="modal__change-form"
          >
            sign in
          </button>
        </div>
      </form>
    </ModalWithForm>
  );
}

export default RegisterModal;
