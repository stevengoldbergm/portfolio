import Home from "../Home/Home";
import Overlay from "../Overlay/Overlay";
import "./Hero.css"



function Hero(props) {
  return (
    <div id="home" className="hero">
      <Overlay />
      <Home />
    </div>
  );
}

export default Hero;