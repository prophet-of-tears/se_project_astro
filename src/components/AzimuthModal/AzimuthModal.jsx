import "./AzimuthModal.css";
import ModalWithDefinition from "../ModalWithDefinition/ModalWithDefinition";

function AzimuthModal({ isOpen, handleModalClose }) {
  return (
    <ModalWithDefinition handleModalClose={handleModalClose} isOpen={isOpen}>
      <h2 className="modal__title">Azimuth</h2>
      <p className="modal__definition">
        Definition: the Azimuth is the degree of an object from due north
        rotating clockwise. 90&deg; would be due East, 180&deg; due South, and
        270&deg; due West.
      </p>
    </ModalWithDefinition>
  );
}

export default AzimuthModal;
