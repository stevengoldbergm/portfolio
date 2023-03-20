import "./App.css";
import downArrow from "./imgs/downArrow.svg";
import purpleBackground from "./imgs/purple_background.jpg";

// import swiper
import { Navigation, Pagination, Scrollbar, grabCursor } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles // use scss later
import "swiper/swiper-bundle.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useEffect, useState } from "react";

// import webDev01 from "./imgs/WebdevArt01.jpg";
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
          <img src={downArrow} alt="A downward facing arrow" />
        </div>
      </main>
    </>
  );
}

// Create Modal component for contact form ( do later )
// Create Contact Form component

// Create a page for my work
function MyWork(props) {
  return (
    <>
      <main className="my-work">
        <div className="tech-stack-container">
          {/* Front-end slides */}
          <div className="tech-stack">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              spaceBetween={0}
              slidesPerView={3.25}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="tech-stack">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              navigation
              pagination={{ clickable: true }}
              scrollbar={{ draggable: true }}
              spaceBetween={0}
              slidesPerView={3.25}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
              <SwiperSlide>
                <ProjectCard />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="tech-stack">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar ]}
              navigation
              pagination={{ clickable: true }}
              Scrollbar={{ draggable: true }}
              grabCursor={true}
              spaceBetween={0}
              slidesPerView={3.5}
              slidesPerGroup={2}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <img src="https://picsum.photos/200" alt="test" height={'100%'} width={'75%'} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/200" alt="test" height={'100%'} width={'75%'} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/200" alt="test" height={'100%'} width={'75%'} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/200" alt="test" height={'100%'} width={'75%'} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/200" alt="test" height={'100%'} width={'75%'} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/200" alt="test" height={'100%'} width={'75%'} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/200" alt="test" height={'100%'} width={'75%'} />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://picsum.photos/200" alt="test" height={'100%'} width={'75%'} />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </main>
    </>
  );
}
// Create content cards for carousel
function ProjectCard(props) {
  const projectArray = props.projects;
  return (
    <>
      {projectArray ? (
        // Add a .map function to pull the project data? No - this component should only show one data object in props, not an array
        // Will need to set up additional prop drilling to get working right
        <div></div>
      ) : (
        <div className="card-container">
          <img
            className="card-banner"
            src={purpleBackground}
            alt="Project Name"
          />
          <main className="card-content">
            <header className="card-header">Project Name</header>
            <p className="card-body">This project has a tagline!</p>
            <footer className="card-footer">Technology Used</footer>
          </main>
        </div>
      )}
    </>
  );
}

// Create Carousel component
function Carousel(props) {
  return (
    <>
      {/* Use a switch to determine which group of values is being generated */}
      {/* Front-End, Back-End, Programs, Portfolio items */}

      {/* test carousel */}
      <div className="carousel">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          spaceBetween={0}
          slidesPerView={3.25}
          loop={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
// Three little carousels are ncessary for the tech stack
// One big carousel is necessary for the app list

export default App;
