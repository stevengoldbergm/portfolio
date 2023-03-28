import "./App.css";
import downArrow from "./assets/imgs/downArrow.svg";

// import swiper, swiper modules, and swiper components for react
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// import useSwiper for nav button support
import { useSwiper } from "swiper/react";

// import swiper styles // use scss
import "./assets/css/custom.min.css";

// Import FontAwesomeIcon components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faArrowTurnDown, faArrowTurnUp } from "@fortawesome/free-solid-svg-icons";

// Import frontEnd, backEnd, programs and projects to generate swipers
import frontEnd from "./assets/data/frontEnd";
import backEnd from "./assets/data/backEnd";
import programs from "./assets/data/programs";
import projects from "./assets/data/projects";

// import { useEffect, useState } from "react";

// import webDev01 from "./assets/imgs/WebdevArt01.jpg";
// import Layout from "./components/layout/Layout";
// import AboutMe from "./components/pages/AboutMe";
// import ContactMe from "./components/pages/ContactMe";
// import MyWork from "./components/pages/MyWork";
// import TechStack from "./components/pages/TechStack";

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero>
        <Overlay>
          <Home />
        </Overlay>
      </Hero>
      <MyWork>
        <ProjectCard />
        <Carousel />
      </MyWork>
    </Layout>
  );
}

// Create basic layout wrapper
// Is this necessary? Probably not - may remove later

function Layout(props) {
  return (
    <div
      className="layout"
      onScroll={() => {
        console.log("test");
      }}
    >
      {props.children}
    </div>
  );
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
          <a className="a" href="#my-work">
            My Work
          </a>
        </li>
        <li className="li">
          <a className="a" href="#tech-stack">
            Tech Stack
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
  return <div className="hero">{props.children}</div>;
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
          <button className="button">My Resume</button>
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
      <main className="my-work">
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
            <FontAwesomeIcon className="move-down flip-down" icon={faArrowTurnDown} />
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
          <Overlay />
            <main className="card-content">
            <header className="card-header">{project.title}</header>
            <p className="card-body">{project.text}</p>
            <footer className="card-footer">{project.tech}</footer>
            <a href={project.liveApp}>liveApp</a>
            <a href={project.gitRepo}>gitRepo</a>
          </main>

          
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
          rewind={true}
        >
          {projects.map((project) => {
            return (
              <Overlay>
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
// Three little carousels are ncessary for the tech stack
// One big carousel is necessary for the app list

export default App;
