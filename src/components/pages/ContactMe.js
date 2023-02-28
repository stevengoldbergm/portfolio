import ContactForm from "../ContactForm/ContactForm";

function ContactMe() {
    
  function submitContact(contactData) {
    // send HTTP fetch request to post data on firebase server
    fetch("https://portfolio-contact-193c3-default-rtdb.firebaseio.com/contacts.json", {
      method: "POST",
      body: JSON.stringify(contactData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

    return (
    <>
      <div>Contact Me Page</div>
      <ContactForm onSubmit={submitContact} />
    </>
  );
}

export default ContactMe;
