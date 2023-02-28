import ContactForm from "../ContactForm/ContactForm";
import classes from "./Modal.module.css";

function Modal({ isVisible, handleIsVisible }) {
  return (
    <>
      {isVisible && (
        <div
          id="modal"
          className={`${classes.modal} ${classes.leadIn}`}
          onClick={handleIsVisible}
        >
          <ContactForm />
        </div>
      )}
    </>
  );
}

export default Modal;
