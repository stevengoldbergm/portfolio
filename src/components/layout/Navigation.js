import classes from "./Navigation.module.css";

function Navigation() {
  // Add a context wrapper to check for whether a contact message has been sent!0
  return (
    <header>
      <nav>
        <ul className={classes.ul}>
        <li className={classes.li}>About Me</li>
          <li className={classes.li}>My Work</li>
          <li className={classes.li}>Tech Stack</li>
          <li className={classes.li}>Contact Me</li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
