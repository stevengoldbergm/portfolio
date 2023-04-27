// Import FA icons and components
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Import other components
import Socials from "./Socials";

// Import css
import "./Footer.css";

// Make a footer
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-row">
          <article className="footer-column">
            <h1>Check me out on the web!</h1>
            <Socials />
          </article>
          <article className="footer-column">
            <h1> Like the stock art?</h1>
            <p>
              Images by
              <a href="https://www.freepik.com/author/vectorjuice">
                <span className="footer-bold"> vectorjuice </span>
              </a>
              on Freepiko
            </p>
          </article>
        </div>
      </footer>
      <div className="copyright">
        <FontAwesomeIcon icon={faCopyright} />
        <p>Steven Goldberg 2023</p>
      </div>
    </>
  );
}

export default Footer;
