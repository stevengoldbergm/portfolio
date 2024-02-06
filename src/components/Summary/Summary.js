// Import images
import headshot from '../../assets/imgs/headshot.png'
// import downArrow from '../../assets/imgs/downArrow.svg'

// Import css
import './Summary.css'

function Summary(props) {
  return (
    <>
      <div className="am-row">
        <div className="am-column">
          <h1>
            About Me
          <p className="text-shadow">About Me</p>
          </h1>
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
{/* 
          <div className="down-arrow">
            <a href="#contact-me">
              <img
                className="arrow"
                src={downArrow}
                alt="A downward facing arrow"
              />
            </a>
          </div> */}
        </div>
      </div>
    </>
  );
}

export default Summary;