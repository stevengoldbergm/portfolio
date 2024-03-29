// Import css
import Footer from "../layout/Footer";
import "./Navburger.css";

function Navburger({ burgerCheck }) {
  function handleBurger() {
    // Find borgr
    const burgerCheck = document.querySelector(".navburger > input");
    // console.log(burgerCheck.checked); // working

    // If you click the link, the burger becomes unchecked
    if (burgerCheck.checked === true) {
      burgerCheck.checked = false;
    }
  }
  return (
    <>
      <label className="navburger">
        <input type="checkbox" />
      </label>
      <aside className="menu">
        <nav className="navburger-menu">
          <div className="navburger-menu-container">
            <a className="a" href="#home" onClick={handleBurger}>
              Home
            </a>
            <a className="a" href="#tech-stack" onClick={handleBurger}>
              Tech
            </a>
            <a className="a" href="#about-me" onClick={handleBurger}>
              About
            </a>
            <a className="a" href="#contact-me" onClick={handleBurger}>
              Contact
            </a>
          </div>
          <div className="footer-container">
            <Footer />
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Navburger;
