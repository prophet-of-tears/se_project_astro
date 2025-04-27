import "./HorizontalLocationModal.css";
import ModalWithDefinition from "../ModalWithDefinition/ModalWithDefinition";

function HorizontalLocationModal({ isOpen, handleModalClose }) {
  return (
    <ModalWithDefinition isOpen={isOpen} handleModalClose={handleModalClose}>
      <h2 className="modal__title">Horizontal Location</h2>
      <p className="modal__definition">
        Definition: The horizontal location is the angle in degress the object
        is from the horizon.
      </p>
    </ModalWithDefinition>
  );
}

export default HorizontalLocationModal;
