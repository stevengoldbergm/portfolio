import Home from "../Home/Home";
import Overlay from "../Overlay/Overlay";
import "./Hero.css";

function Hero({ handleModal }) {
  return (
    <div id="home" className="hero">
      <Overlay />
      <Home handleModal={handleModal} />
    </div>
  );
}

export default Hero;
