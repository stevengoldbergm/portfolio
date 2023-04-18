// Import css
import "./Navburger.css";
function Navburger() {
  const burgerCheck = document.querySelector(".navburger > input");
  // console.log(burgerCheck.checked); working

  function handleBurger() {
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
        </nav>
      </aside>
    </>
  );
}

export default Navburger;
