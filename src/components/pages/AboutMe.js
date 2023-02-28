import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import classes from "./AboutMe.module.css";

function AboutMe() {
  // Define visibility state for modal
  const [isVisible, setIsVisible] = useState(false);
  // update body if modal is initiated to remove scroll
  useEffect(() => {
    // When you set off the handler, change the visible value
    console.log(isVisible);

    if (isVisible === true) {
      document.querySelector("body").classList.add("no-scroll");
      window.scrollTo({top:0, behavior: 'smooth'});
    } else {
      document.querySelector("body").classList.remove("no-scroll");
    }

    return;
  }, [isVisible]);

  function handleIsVisible() {
    setIsVisible(() => !isVisible);
  }

  


  return (
    <main className={classes.main}>
      <section className={classes.diagonal}>
        <div className={classes.wrapper}>
          <div className={classes.gridContainer}>
            <div className={classes.imgWrapper}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Charlemagne_denier_Mayence_812_814.jpg"
                className={classes.img}
                alt="My handsome face"
              />
            </div>
            <div className={classes.innerWrapper}>
              <h1 id="about-me">Hi, I'm Steve!</h1>
              <p>
                I'm a certified full-stack web-developer with background in psychology,
                and nearly a decade's experience in imaging operations. I've lead teams and projects for years.
                <br />
                <br />
                Take a look at my work, and feel free to contact me if
                you're looking for a developer with great communication skills,
                a growth mindset, and a strong work ethic!
              </p>

              <div className={classes.gridContainer}>
                {/* Do I need a link here, or just an onClick effect? */}
                <a className={classes.a} href="#about-me">
                  <button className={classes.btn}>My Resume</button>
                </a>
                <a
                href="#contact-form" 
                className={classes.a} 
                onClick={handleIsVisible}>
                  <button className={classes.btn}>
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>  
      <Modal isVisible={isVisible} handleIsVisible={handleIsVisible} />
    </main>
  
  );
}

export default AboutMe;
