// Import components
import ContactForm from "../ContactForm/ContactForm";

// Import images
import webDev02 from "../../assets/imgs/WebdevArt02.png";

// Import css
import "./ContactSection.css";

function ContactSection(props) {
  return (
    <>
      <div className="cs-row">
        <div className="cs-column">
          {/* Put text here for the contact form */}
          <h1>Questions? Comments?</h1>
          <p>
            {/* ✉ */}
            Feel free to e-mail me: {" "}
            {/* ✉ */}
            <br />
            <a className="e-mail" href="mailto:stevengoldbergm@gmail.com">
              stevengoldbergm@gmail.com
            </a>
            <br />
            Or send me a message and I'll get back to you!
          </p>
          <div className="cs-column">
            <ContactForm />
          </div>
        </div>
        <div className="cs-column">
          <img alt="Illustration of two people using laptops" src={webDev02} />
          <div className="img-overlay" />
        </div>
      </div>
    </>
  );
}

export default ContactSection;
