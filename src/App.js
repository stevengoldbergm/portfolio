import "./App.css";

// import swiper, swiper modules, and swiper components for react
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import useSwiper for nav button support
import { useSwiper } from "swiper/react";

// import swiper styles // use scss
import "./assets/css/custom.min.css";

// Import FontAwesomeIcon components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight,
  faArrowTurnDown,
  faArrowTurnUp,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";

// Import frontEnd, backEnd, programs and projects to generate swipers
import frontEnd from "./assets/data/frontEnd";
import backEnd from "./assets/data/backEnd";
import programs from "./assets/data/programs";
import projects from "./assets/data/projects";

// Import images and other files
import downArrow from "./assets/imgs/downArrow.svg";
import headshot from "./assets/imgs/headshot.png";
import webDev02 from "./assets/imgs/WebdevArt02.png";
import resume from "./assets/files/WebDeveloperResume_2023.pdf";

import { useEffect, useRef, useState } from "react";

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
      // navbar.style.top = '1rem';
      navbar.style.height = "4rem";
    } else {
      // navbar.style.top = '-3rem';
      navbar.style.height = "3rem";
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
    <Layout>
      <Navbar />
      {/* Home page */}
      <Hero>
        <Overlay />
        <Home />
      </Hero>

      {/* Tech Stack page */}
      <MyWork>
        <ProjectCard />
        <Carousel />
      </MyWork>

      {/* AboutMe Page */}
      <AboutMe>
        <Summary />
      </AboutMe>

      {/* Contact Page */}
      <Contact>
        <ContactSection />
      </Contact>
    </Layout>
  );
}

// Create basic layout wrapper
// Is this necessary? Probably not - may remove later

function Layout(props) {
  return <div className="layout">{props.children}</div>;
}

// Create a navigation bar
function Navbar() {
  return (
    <nav className="nav">
      <div className="bold h2">SG</div>
      <ul className="ul">
        <li className="li">
          <a className="a" href="#home">
            Home
          </a>
        </li>
        <li className="li">
          <a className="a" href="#tech-stack">
            Tech Stack
          </a>
        </li>
        <li className="li">
          <a className="a" href="#about-me">
            About Me
          </a>
        </li>
        <li className="li">
          <a className="a" href="#contact-me">
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

// Create HERO component for first page
function Hero(props) {
  return (
    <div id="home" className="hero">
      {props.children}
    </div>
  );
}

// Create overlay for Hero
function Overlay(props) {
  return <div className="overlay">{props.children}</div>;
}

// Create About Me container

function Home() {
  return (
    <>
      <main className="home">
        <h1 className="h1">Steven Goldberg</h1>
        <h2 className="h2">Web Developer</h2>
        <div className="flex-container">
          <button className="button">Contact Me</button>
          <button className="button">
            <a href={resume} download="StevenGoldbergResume_2023.pdf">
              My Resume
            </a>
          </button>
        </div>
        <div className="down-arrow">
          <a href="#tech-stack">
            <img
              className="arrow"
              src={downArrow}
              alt="A downward facing arrow"
            />
          </a>
        </div>
      </main>
    </>
  );
}

// Create Modal component for contact form ( do later )
// Create Contact Form component

// Create badges for skills
function Badge({ reference, source, altText }) {
  return (
    <a href={reference} target="_blank" rel="noreferrer">
      <img src={source} width="36" height="36" alt={altText} />
    </a>
  );
}

function SwiperNavButtons(props) {
  const swiper = useSwiper();
  return (
    <div className="nav-buttons">
      <button
        className="btn"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} size={props.size} />
      </button>
      <button
        className="btn"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} size={props.size} />
      </button>
    </div>
  );
}

// Create Tech Swiper
function TechSwiper({ tech }) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar]}
      // navigation
      // pagination={{
      //   clickable: true,
      // }}
      // scrollbar={{ draggable: true }}
      shortSwipes={false}
      autoplay={{ delay: 2000, reverseDirection: true }}
      grabCursor={true}
      spaceBetween={1}
      slidesPerView={3}
      slidesPerGroup={2}
      // initialSlide={length}
      loop={true}
    >
      {/* Map through data to make badges */}
      {tech &&
        tech.map((badge) => {
          return (
            <SwiperSlide key={badge.id}>
              <div className="badge" key={badge.id}>
                <Badge
                  reference={badge.reference}
                  source={badge.source}
                  altText={badge.altText}
                  key={badge.id}
                />
                <p>{badge.altText}</p>
              </div>
            </SwiperSlide>
          );
        })}
      <SwiperNavButtons size="lg" />
    </Swiper>
  );
}

// Create a page for my work
function MyWork() {
  return (
    <>
      <main id="tech-stack" className="my-work">
        <div className="tech-stack-container">
          {/* Front-end slides */}
          <div className="tech-stack-column">
            <h2 className="tech-stack-header">Front-End</h2>
            <div className="tech-stack">
              <TechSwiper tech={frontEnd} />
            </div>
          </div>

          {/* Back-End Slides */}
          <div className="tech-stack-column">
            <h2 className="tech-stack-header">Back-End</h2>
            <div className="tech-stack">
              <TechSwiper tech={backEnd} />
            </div>
          </div>

          {/* Program List */}
          <div className="tech-stack-column">
            <h2 className="tech-stack-header">Programs</h2>
            <div className="tech-stack">
              <TechSwiper tech={programs} />
            </div>
          </div>
        </div>
        <div className="tech-stack-row">
          <div className="tech-stack-row center">
            <FontAwesomeIcon className="move-up" icon={faArrowTurnUp} />
            <p> My Tech Stack </p>
            <FontAwesomeIcon className="move-up flip-up" icon={faArrowTurnUp} />
          </div>
          <div className="tech-stack-row center">
            <FontAwesomeIcon
              className="move-down flip-down"
              icon={faArrowTurnDown}
            />
            <p> My Recent projects</p>
            <FontAwesomeIcon className="move-down" icon={faArrowTurnDown} />
          </div>
        </div>

        <Carousel />
      </main>
    </>
  );
}
// Create content cards for carousel
function ProjectCard({ project }) {
  // Apparently you can't destructure something twice?
  // const { img, title, text, tech, liveApp, gitRepo } = project;
  return (
    <>
      {project && (
        <div className="card-container">
          <img className="card-banner" src={project.img} alt={project.title} />
          {/* <Overlay /> */}
          <main className="card-content">
            <header className="card-header">
              {project.title}
              <div className="card-button-container">
                <button className="card-button">
                  <a href={project.liveApp} title="Live Site">
                    <FontAwesomeIcon icon={faWindowMaximize} />
                  </a>
                </button>
                <button className="card-button">
                  <a href={project.gitRepo} title="GitHub Repo">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </button>
              </div>
            </header>
            <p className="card-body">{project.text}</p>
            <footer className="card-footer">{project.tech}</footer>
          </main>
          {/* <Overlay /> */}
        </div>
      )}
    </>
  );
}

// Create Carousel component
function Carousel() {
  return (
    <>
      {/* test carousel */}
      <div className="carousel">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar]}
          pagination={{
            clickable: true,
          }}
          // spaceBetween={0}
          slidesPerView={4}
          slidesPerGroup={2}
          // initialSlide={projects.length}
          autoplay={{ delay: 2000 }}
          grabCursor={true}
          // rewind={true}
        >
          {projects.map((project) => {
            return (
              <Overlay key={project.id}>
                <SwiperSlide key={project.id}>
                  <ProjectCard project={project} />
                </SwiperSlide>{" "}
              </Overlay>
            );
          })}
          <SwiperNavButtons size="3x" />
        </Swiper>
      </div>
    </>
  );
}

// Create an About Me page
function AboutMe(props) {
  return (
    <div id="about-me" className="about-me">
      {props.children}
    </div>
  );
}

// Create a component for your picture and summary
function Summary(props) {
  return (
    <>
      <div className="am-row">
        <div className="am-column">
          <h1>About Me</h1>
          <p className="text-shadow">About Me</p>
          <img src={headshot} alt="headshot" />
        </div>

        <div className="am-column">
          <h2>Hi - I'm Steve!</h2>
          <p>
            And I'm a certified full-stack web-developer.
            <br />
            <br />
            I have a bachelor's degree in psychology and nearly a decade's worth
            of experience leading teams and projects in imaging operations for
            financial institutions. I'm passionate about continuing to learn and
            improve myself, and I love helping others. When I'm not working, I
            like to read fantasy novels and run TTRPGs for my friends.
            <br />
            <br />
            If you're looking for a developer with great communication skills, a
            growth mindset, and a strong work ethic, contact me below!
          </p>

          <div className="down-arrow">
            <a href="#contact-me">
              <img
                className="arrow"
                src={downArrow}
                alt="A downward facing arrow"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

// Create a Contact Me page
function Contact(props) {
  return (
    <div id="contact-me" className="contact">
      {props.children}
    </div>
  );
}

// Create component form for contact submission
// Use this with the modal
function ContactForm(props) {
  // useRef to make easy forms. Could useState, but it's more work.
  const fnInputRef = useRef();
  const lnInputRef = useRef();
  const emlInputRef = useRef();
  const txtInputRef = useRef();

  function handleFormSubmit(e) {
    e.preventDefault();
    const enteredFirstName = fnInputRef.current.value;
    const enteredLastName = lnInputRef.current.value;
    const enteredEmail = emlInputRef.current.value;
    const enteredText = txtInputRef.current.value;

    // Find the current time
    const utcDate = Date.now();
    const plainDate = new Date(utcDate).toLocaleString("en-US", {
      hour12: false,
    });
    console.log(utcDate);
    console.log(plainDate);
    console.log(
      enteredFirstName,
      enteredLastName,
      enteredEmail,
      enteredText,
      utcDate,
      plainDate
    );

    // Set up the payload for the message
    const payload = {
      name: `${enteredFirstName} ${enteredLastName}`,
      email: enteredEmail,
      comments: enteredText,
      date: plainDate,
      utcDate,
    };

    submitData(payload);
  }

  function submitData(contactData) {
    // send HTTP fetch request to post data on firebase server
    fetch(
      "https://portfolio-contact-193c3-default-rtdb.firebaseio.com/contacts.json",
      {
        method: "POST",
        body: JSON.stringify(contactData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    // Clear the payload
    fnInputRef.current.value = "";
    lnInputRef.current.value = "";
    emlInputRef.current.value = "";
    txtInputRef.current.value = "";
  }

  return (
    <>
      <div className="form-container">
        <form className="contact-form">
          {/* Top row for first name/ last name */}
          <div className="form-row">
            <div className="form-row-container">
              {/* first name */}
              <label className="form-label" htmlFor="inputFirstName">
                First Name:
              </label>
              <input
                className="form-input"
                required
                type="text"
                id="inputFirstName"
                ref={fnInputRef}
                aria-label="First Name"
                placeholder="John"
                // autoComplete="nope"
              />
            </div>
            {/* Last name */}
            <div className="form-row-container">
              <label className="form-label" htmlFor="inputLastName">
                Last Name:
              </label>
              <input
                className="form-input"
                required
                type="text"
                id="inputLastName"
                ref={lnInputRef}
                aria-label="Last Name"
                placeholder="Doe"
                // autoComplete="nope"
              />
            </div>
          </div>
          {/* Email */}
          <div className="form-row-container">
            <label className="form-label" htmlFor="inputEmail">
              E-mail:
            </label>
            <input
              className="form-input"
              required
              type="text"
              id="inputEmail"
              ref={emlInputRef}
              aria-label="E-mail"
              placeholder="notadeer@example.com"
              // autoComplete="nope"
            />
          </div>
          {/* Message Text */}
          <label htmlFor="inputText" className="form-label">
            Comments:
          </label>
          <textarea
            required
            type="text"
            id="inputText"
            ref={txtInputRef}
            aria-label="Message Text"
            placeholder="Any comments or inquiries go here!"
          />
          <button
            className="button center"
            type="submit"
            onClick={handleFormSubmit}
          >
            Send me a message!
          </button>
        </form>
      </div>
    </>
  );
}

function ContactSection(props) {
  return (
    <>
      <div className="cs-row">
        <div className="cs-column">
          {/* Put text here for the contact form */}
          <h1>Questions? Comments?</h1>
          <br />
          <p>
            Feel free to{" "}
            <a className="e-mail" href="mailto:stevengoldbergm@gmail.com">
              e-mail me ✉
            </a>
            <br />
            Or send me a message and I'll get back to you!
          </p>
          <ContactForm />
        </div>
        <div className="cs-column">
          <img alt="Illustration of two people using laptops" src={webDev02} />
          <div className="img-overlay" />
        </div>
      </div>
    </>
  );
}

export default App;
