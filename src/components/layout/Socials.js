// Import FA/icons
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// Import css
import './Socials.css'

function Socials() {
  return (
    <div className="socials">
      <a href="https://www.linkedin.com/in/stevengoldbergm/">
        <FontAwesomeIcon icon={faLinkedin}  />
      </a>
      <a href="https://github.com/stevengoldbergm">
        <FontAwesomeIcon icon={faGithubSquare} />
      </a>
      <a href="https://twitter.com/stevengoldbergm">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
    </div>
  );
}

export default Socials;
