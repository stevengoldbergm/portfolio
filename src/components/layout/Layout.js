import Navigation from "./Navigation";
import Socials from "./Socials";
import Blob from "../ui/Blob";
import classes from "./Layout.module.css";
import { useState } from "react";
import Modal from "../ui/Modal";

function Layout(props) {
  const [mouseX, setMouseX] = useState();
  const [mouseY, setMouseY] = useState();
  const [scrollY, setScrollY] = useState();

  const modalBox = {
    overflowY: "hidden"
  }


  function trackPointer(event) {
    const { clientX, clientY } = event;
    // console.log(clientX, clientY);
    let currentScroll = window.scrollY;
    setMouseX(clientX);
    setMouseY(clientY);
    setScrollY(currentScroll);
    // console.log(scrollY);
  }
  
  return (
    <div onPointerMove={trackPointer} onWheel={trackPointer}>
      <header className={classes.header}>
        <Navigation />
        <Socials />
      </header>
      <main className={classes.main}>{props.children}</main>
      <Blob mouseX={mouseX} mouseY={mouseY} scrollY={scrollY} />
      <Modal />
    </div>
  );
}

export default Layout;
