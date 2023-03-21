import "./App.css";
import downArrow from "./assets/imgs/downArrow.svg";
import insomnia from "./assets/imgs/insomnia.svg"
import mongoDBC from "./assets/imgs/mongoDbCompass.svg"
import purpleBackground from "./assets/imgs/purple_background.jpg";

// import swiper
import { Navigation, Pagination, Scrollbar } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles // use scss 
import "./assets/css/custom.min.css"

import { useEffect, useState } from "react";

import webDev01 from "./assets/imgs/WebdevArt01.jpg";
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

// Create badges for skills
function Badge({reference, source, altText}) {
  return (
    <a href={reference} target="_blank" rel="noreferrer">
      <img src={source} width="36" height="36" alt="HTML5" />
    </a>
  )
}

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
              // navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              grabCursor={true}
              spaceBetween={0}
              slidesPerView={3.5}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://developer.mozilla.org/en-US/docs/Glossary/HTML5'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg'
                    altText='HTML 5'
                  />
                  <p>HTML5</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://www.w3.org/TR/CSS/#css'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg'
                    altText='CSS3'
                  />
                  <p>CSS3</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://developer.mozilla.org/en-US/docs/Web/JavaScript'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg'
                    altText='JavaScript'
                  />
                  <p>JavaScript</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://jquery.com/'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/jquery-colored.svg'
                    altText='JQuery'
                  />
                  <p>JQuery</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://reactjs.org/'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg'
                    altText='ReactJS'
                  />
                  <p>ReactJS</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://sass-lang.com/'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/sass-colored.svg'
                    altText='SASS'
                  />
                  <p>SASS</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://getbootstrap.com/'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg'
                    altText='Bootstrap'
                  />
                  <p>Bootstrap</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://bulma.io'
                    source='https://cdn.worldvectorlogo.com/logos/bulma.svg'
                    altText='Bulma'
                  />
                  <p>Bulma</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          {/* Back-End Slides */}
          <div className="tech-stack">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar]}
              // navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
              grabCursor={true}
              spaceBetween={0}
              slidesPerView={3.5}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://nodejs.org/en/'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg'
                    altText='NodeJS'
                  />
                  <p>NodeJS</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://expressjs.com/'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg'
                    altText='ExpressJS'
                  />
                  <p>ExpressJS</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://graphql.org/'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/graphql-colored.svg'
                    altText='GraphQL'
                  />
                  <p>GraphQL</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://www.mongodb.com/'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg'
                    altText='MongoDB'
                  />
                  <p>MongoDB</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://www.mysql.com/'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg'
                    altText='MySQL2'
                  />
                  <p>MySQL2</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://www.postgresql.org/'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/postgresql-colored.svg'
                    altText='PostgreSQL'
                  />
                  <p>PostgreSQL</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://www.heroku.com/'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/heroku-colored.svg'
                    altText='Heroku'
                  />
                  <p>Heroku</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://wordpress.org'
                    source='https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg'
                    altText='WordPress'
                  />
                  <p>WordPress</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="tech-stack">
            <Swiper
              modules={[Navigation, Pagination, Scrollbar ]}
              // navigation
              // pagination={{ clickable: true }}
              // Scrollbar={{ draggable: true }}
              grabCursor={true}
              spaceBetween={0}
              slidesPerView={3.5}
              slidesPerGroup={2}
              loop={true}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://git-scm.com/'
                    source='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg'
                    altText='Git'
                  />
                  <p>Git</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://code.visualstudio.com/'
                    source='https://cdn.cdnlogo.com/logos/v/82/visual-studio-code.svg'
                    altText='Visual Studio Code'
                  />
                  <p>VS Code</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://insomnia.rest/'
                    source={insomnia}
                    altText='Insomnia'
                  />
                  <p>Insomnia</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://www.mysql.com/products/workbench/'
                    source='https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Antu_mysql-workbench.svg/512px-Antu_mysql-workbench.svg.png'
                    altText='MySQL Workbench'
                  />
                  <p>Workbench</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://www.mongodb.com/products/compass'
                    source={mongoDBC}
                    altText='MongoDB Compass'
                  />
                  <p>Compass</p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://www.microsoft.com/en-us/microsoft-365'
                    source='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Microsoft_Office_logo_%282019%E2%80%93present%29.svg/512px-Microsoft_Office_logo_%282019%E2%80%93present%29.svg.png'
                    altText='Microsoft Office'
                  />
                  <p>MS Office</p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='https://docs.google.com'
                    source='https://upload.wikimedia.org/wikipedia/commons/6/66/Google_Docs_2020_Logo.svg'
                    altText='Google Docs'
                  />
                  <p>Docs</p>
                </div>
              </SwiperSlide>
              
              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='http://sheets.google.com'
                    source='https://upload.wikimedia.org/wikipedia/commons/3/30/Google_Sheets_logo_%282014-2020%29.svg'
                    altText='Google Sheets'
                  />
                  <p>Sheets</p>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="badge">
                  <Badge 
                    reference='http://slides.google.com'
                    source='https://upload.wikimedia.org/wikipedia/commons/1/1e/Google_Slides_logo_%282014-2020%29.svg'
                    altText='Google Slides'
                  />
                  <p>Slides</p>
                </div>
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
