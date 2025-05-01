import "./AstronomicalUnitModal.css";
import ModalWithDefinition from "../ModalWithDefinition/ModalWithDefinition";

function AstronomicalUnitModal({ isOpen, handleModalClose }) {
  return (
    <ModalWithDefinition handleModalClose={handleModalClose} isOpen={isOpen}>
      <h2 className="modal__title">Astronomical Unit</h2>
      <p className="modal__definition">
        Definition: An astronomical Unit is measured as the distance from the
        earth to the sun. Therefore the Earth is 1AU away from the sun. If an
        object in space is said to be 4AU from the Earth, then the distance you
        would need to travel to reach said object would be the journey from the
        Earth to the sun 4 times.(95 million miles X 4){" "}
      </p>
    </ModalWithDefinition>
  );
}

export default AstronomicalUnitModal;
