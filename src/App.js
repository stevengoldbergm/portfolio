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


function App() {
  // Set up State for navbar visibility
  const [isVisible, setIsVisible] = useState(true);

  // Set state to check Y position of page
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // set up useEffect to track navbar
  useEffect(() => {
    const navbar = document.querySelector(".nav");
    
    console.log(navbar);
    if (isVisible) {
      navbar.style.top = '1rem';
      navbar.style.height = "4rem";
      navbar.style.backgroundColor = "rgba(255, 255, 255, 0)"
    } else {
      // navbar.style.top = '-3rem';
      navbar.style.height = "3rem";
      navbar.style.top = "0";
      navbar.style.backgroundColor = "rgb(255, 255, 255, .75)"
    }
  }, [isVisible, prevScrollPos]);

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

  return (
    // used to be layout object
    <> 
      <Navbar />

      {/* Home page */}
      <Hero />

      {/* Tech Stack page */}
      <MyWork />

      {/* AboutMe Page */}
      <AboutMe />

      {/* Contact Me Page */}
      <Contact />

      {/* Footer */}
      <Footer />

      
    </>
  );
}



export default App;
