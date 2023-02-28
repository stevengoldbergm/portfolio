import { useRef } from "react";
import classes from "./ContactForm.module.css"

function ContactForm(props) {
  // console.log(props);
  // Set up the useRef objects
  const contactFirstName = useRef();
  const contactLastName = useRef();
  const contactEmail = useRef();
  const contactMessage = useRef();

  // Make the formSubmit handler
  function submitHandler(event) {
    event.preventDefault();

    // define the form values
    const enteredFirstName = contactFirstName.current.value;
    const enteredLastName = contactLastName.current.value;
    const enteredEmail = contactEmail.current.value;
    const enteredMessage = contactMessage.current.value;

    // create data payload to push to server
    const contactData = {
      firstName: enteredFirstName,
      lastName: enteredLastName,
      email: enteredEmail,
      message: enteredMessage,
    };

    // send data to server
    console.log("Data submitted successfully \n",contactData);
    props.onSubmit(contactData);

    // Clear the form
    contactFirstName.current.value = ""
    contactLastName.current.value = ""
    contactEmail.current.value = ""
    contactMessage.current.value = ""
  }

  return (
    <>
      <div>Contact Submit Form</div>

      <form className={classes.form} onSubmit={submitHandler}>
        <label className={classes.label}>First Name</label>
        <input className={classes.input} type="text" id="name" ref={contactFirstName} required />

        <label className={classes.label}>Last Name</label>
        <input className={classes.input} type="text" id="name" ref={contactLastName} required />

        <label>Your Email</label>
        <input type="text" id="email" ref={contactEmail} required />


        <label>Your Message</label>
        <input type="textarea" id="message" ref={contactMessage} required />


        <button>Contact me</button>
      </form>
    </>
  );
}

export default ContactForm;
