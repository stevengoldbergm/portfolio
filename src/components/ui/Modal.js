import ContactForm from "../ContactForm/ContactForm";
import "./Modal.css"

function Modal({ handleModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <ContactForm />
      </div>
      <div className="modal-backdrop" onClick={handleModal}></div>
    </div>
  );
}

export default Modal;
