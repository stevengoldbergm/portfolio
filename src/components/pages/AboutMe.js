// Import additional components
import Summary from '../Summary/Summary';

// Import css
import './AboutMe.css'

// Create an About Me page
function AboutMe(props) {
  return (
    <div id="about-me" className="about-me">
      <Summary />
    </div>
  );
}

export default AboutMe;