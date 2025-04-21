import "./RegisterModal.css";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function RegisterModal({ handleModalClose, isOpen }) {
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
      </form>
    </ModalWithForm>
  );
}

export default RegisterModal;
