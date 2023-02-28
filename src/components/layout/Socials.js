import classes from "./Socials.module.css"

function Socials() {
  // Add a context wrapper to check for whether a contact message has been sent!
  return (
      <nav>
        <ul className={classes.ul}>
          <li className={classes.li}>Twitter</li>
          <li className={classes.li}>LinkedIn</li>
          <li className={classes.li}>GitHub</li>
        </ul>
      </nav>
  );
}

export default Socials;