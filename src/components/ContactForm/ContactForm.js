// Import React hooks
import { useRef } from "react";

// Import css
import "./ContactForm.css";

// Create component form for contact submission
function ContactForm(props) {
  // useRef to make easy forms. Could useState, but it's more work.
  const fnInputRef = useRef();
  const lnInputRef = useRef();
  const emlInputRef = useRef();
  const txtInputRef = useRef();

  function handleFormSubmit(e) {
    e.preventDefault();
    const enteredFirstName = fnInputRef.current.value;
    const enteredLastName = lnInputRef.current.value;
    const enteredEmail = emlInputRef.current.value;
    const enteredText = txtInputRef.current.value;

    // Find the current time
    const utcDate = Date.now();
    const plainDate = new Date(utcDate).toLocaleString("en-US", {
      hour12: false,
    });
    console.log(utcDate);
    console.log(plainDate);
    console.log(
      enteredFirstName,
      enteredLastName,
      enteredEmail,
      enteredText,
      utcDate,
      plainDate
    );

    // Set up the payload for the message
    const payload = {
      name: `${enteredFirstName} ${enteredLastName}`,
      email: enteredEmail,
      comments: enteredText,
      date: plainDate,
      utcDate,
    };

    // Only send payload if all fields are filled
    if (
      fnInputRef.current.value !== "" &&
      lnInputRef.current.value !== "" &&
      emlInputRef.current.value !== "" &&
      txtInputRef.current.value !== ""
    ) {
      submitData(payload);
      // console.log("Payload Submitted");
    } else {
      // console.log("Payload not ready");
      return;
    }
  }

  function submitData(contactData) {
    // send HTTP fetch request to post data on firebase server
    fetch(
      "https://portfolio-contact-193c3-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Clear the payload
    fnInputRef.current.value = "";
    lnInputRef.current.value = "";
    emlInputRef.current.value = "";
    txtInputRef.current.value = "";
  }

  return (
    <>
      <div className="form-container">
        <form className="contact-form">
          {/* Top row for first name/ last name */}
          <div className="form-row">
            <div className="form-row-container">
              {/* first name */}
              <label className="form-label" htmlFor="inputFirstName">
                First Name:
              </label>
              <input
                className="form-input"
                required
                type="text"
                id="inputFirstName"
                ref={fnInputRef}
                aria-label="First Name"
                placeholder="John"
                // autoComplete="nope"
              />
            </div>
            {/* Last name */}
            <div className="form-row-container">
              <label className="form-label" htmlFor="inputLastName">
                Last Name:
              </label>
              <input
                className="form-input"
                required
                type="text"
                id="inputLastName"
                ref={lnInputRef}
                aria-label="Last Name"
                placeholder="Doe"
                // autoComplete="nope"
              />
            </div>
          </div>
          {/* Email */}
          <div className="form-row-container">
            <label className="form-label" htmlFor="inputEmail">
              E-mail:
            </label>
            <input
              className="form-input"
              required
              type="text"
              id="inputEmail"
              ref={emlInputRef}
              aria-label="E-mail"
              placeholder="notadeer@example.com"
              // autoComplete="nope"
            />
          </div>
          {/* Message Text */}
          <label htmlFor="inputText" className="form-label">
            Comments:
          </label>
          <textarea
            required
            type="text"
            id="inputText"
            ref={txtInputRef}
            aria-label="Message Text"
            placeholder="Any comments or inquiries go here!"
          />
          <button className="form-btn" type="submit" onClick={handleFormSubmit}>
            Send me a message!
          </button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
