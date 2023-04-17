// Import FontAwesomeIcon components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWindowMaximize } from "@fortawesome/free-regular-svg-icons";

// Import CSS
import "./ProjectCard.css"

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

export default ProjectCard;