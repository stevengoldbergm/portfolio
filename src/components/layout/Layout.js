import Navigation from "./Navigation";
import Socials from "./Socials";
import classes from "./Layout.module.css"

function Layout(props) {
  return (
    <header>
      <Navigation />
      <Socials />
      <main className={classes.main}>{props.children}</main>
    </header>
  );
}

export default Layout;