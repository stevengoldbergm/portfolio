// Import components
import TechSwiper from "../TechSwiper/TechSwiper";
import Carousel from "../Carousel/Carousel";

// Import Data
import frontEnd from "../../assets/data/frontEnd";
import backEnd from "../../assets/data/backEnd";
import programs from "../../assets/data/programs";

// Import FontAwesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnUp, faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";

// Import css
import './MyWork.css'

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
            <p> My Projects</p>
            <FontAwesomeIcon className="move-down" icon={faArrowTurnDown} />
          </div>
        </div>

        <Carousel />
      </main>
    </>
  );
}

export default MyWork;