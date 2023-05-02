// Import the necessary css sheets
import "./App.css";
import "./assets/css/custom.min.css";

// Import React hooks
import { useEffect, useState } from "react";

// Import individual pages and components
import Navbar from "./components/layout/Navbar";
//  --- Pages
import Hero from "./components/pages/Hero";
import MyWork from "./components/pages/MyWork";
import AboutMe from "./components/pages/AboutMe";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";
import Modal from "./components/ui/Modal";
import Wrapper from "./components/Wrapper/Wrapper";

function App() {
  // // Set state for Modal visibility
  const [modalVisible, setModalVisible] = useState(false);

  // Set up State for navbar visibility
  const [isVisible, setIsVisible] = useState(true);

  // Set state to check Y position of page
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // set up useEffect to track navbar
  useEffect(() => {
    // Find navbar and modal
    const navbar = document.querySelector(".nav");
    const modal = document.querySelector(".modal");
    const root = document.querySelector("#root");

    // Change navbar style based on state
    console.log(navbar);
    if (isVisible) {
      // navbar.style.top = '1rem';
      navbar.style.top = "0";
      navbar.style.height = "4rem";
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
    } else {
      // navbar.style.top = '-3rem';
      navbar.style.height = "3rem";
      navbar.style.top = "0";
      navbar.style.backgroundColor = "var(--navbar)";
    }

    // Change modal visibility based on state and lock screen
    console.log(modalVisible);
    if (modalVisible) {
      modal.style.opacity = "100";
      modal.style.pointerEvents = "all";
      root.style.height = "100vh";
      root.style.overflowY = "hidden";
    } else {
      modal.style.opacity = "0";
      modal.style.pointerEvents = "none";
      root.style.height = "auto";
      root.style.overflowY = "visible";
    }
  }, [isVisible, prevScrollPos, modalVisible]);

  // on scroll, update the Y position
  window.onscroll = () => {
    // Set current scroll position
    const currentScrollPos = window.scrollY;
    console.log("scrolling");
    console.log("previous", prevScrollPos);
    console.log("current", currentScrollPos);

    if (currentScrollPos > 75) {
      console.log("hide nav");
      setPrevScrollPos(currentScrollPos);
      setIsVisible(false);
    } else {
      console.log("reveal nav");
      setPrevScrollPos(currentScrollPos);
      setIsVisible(true);
    }
  };

  function handleModal() {
    setModalVisible(!modalVisible);
  }
  
  return (
    // used to be layout object
    <Wrapper>
      <Navbar />

      {/* Home page */}
      <Hero handleModal={handleModal} />

      {/* Tech Stack page */}
      <MyWork />

      {/* AboutMe Page */}
      <AboutMe />

      {/* Contact Me Page */}
      <Contact />

      {/* Footer */}
      <Footer />

      <Modal handleModal={handleModal} />
    </Wrapper>
  );
}

export default App;
