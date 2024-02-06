import "./Home.css";

import downArrow from "../../assets/imgs/downArrow.svg";
import resume from "../../assets/files/WebDeveloperResume_2024.pdf";

function Home({ handleModal }) {
  return (
    <>
      <main className="home">
        <h1 className="h1">Steven Goldberg</h1>
        <h2 className="h2">Web Developer</h2>
        <div className="flex-container">
          <button className="button" onClick={handleModal}>
            {/* <a href="#contact-me">Contact Me</a> */}
            <div >Contact Me</div>
          </button>
          <button className="button">
            <a href={resume} download="StevenGoldbergResume_2024.pdf">
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

export default Home;
