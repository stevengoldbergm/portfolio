import classes from "./Navigation.module.css";

function Navigation() {
  // Add a context wrapper to check for whether a contact message has been sent!0
  return (
    <nav>
      <ul className={classes.ul}>
        <li className={classes.li}>
          <a className={classes.a} href="#about-me">About Me</a>
        </li>
        <li className={classes.li}>
          <a className={classes.a} href="#my-work">My Work</a>
        </li>
        <li className={classes.li}>
          <a className={classes.a} href="#tech-stack">Tech Stack</a>
        </li>
        <li className={classes.li}>
          <a className={classes.a} href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
