import "./App.css";
// import Layout from "./components/layout/Layout";
// import AboutMe from "./components/pages/AboutMe";
// import ContactMe from "./components/pages/ContactMe";
// import MyWork from "./components/pages/MyWork";
// import TechStack from "./components/pages/TechStack";

function App() {
  return (
    <Layout>
      <Hero>
        <Navigation/>
        <AboutMe />
      </Hero>
      

    </Layout>
  );
}

// Create basic layout wrapper

function Layout(props) {
  return (
    <div className="layout">
      {props.children}
    </div>
  )
}

// Create a navigation bar
function Navigation() {
  return (
    <nav className="nav">
      <div className="li a">SG</div>
      <ul className="ul">
        <li className="li">
          <a className="a" href="#about-me">About Me</a>
        </li>
        <li className="li">
          <a className="a" href="#my-work">My Work</a>
        </li>
        <li className="li">
          <a className="a" href="#tech-stack">Tech Stack</a>
        </li>
        <li className="li">
          <a className="a"  href="#contact-me">Contact Me</a>
        </li>
      </ul>
    </nav>
  )
}

// Create HERO component for first page
function Hero(props) {
  return (
    <div className="hero">
      {props.children}
    </div>
  )
}

// Create About Me container

function AboutMe() {
  return (
    <main className="about-me">
      <h1 className="h1">Steven Goldberg</h1>
      <h2 className="h2">Web Developer</h2>
      <div className="flex-container">
        <button className="button">
        Contact Me
        </button>
        <button className="button">
          My Resume
        </button>
      </div>
    </main>
  )
}

// Create Modal component for contact form ( do later )
  // Create Contact Form component






export default App;
