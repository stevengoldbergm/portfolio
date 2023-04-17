// Import FontAwesome components
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

// Import useSwiper function
import { useSwiper } from "swiper/react";

// Import css
import './SwiperNavButtons.css'

function SwiperNavButtons(props) {
  const swiper = useSwiper();
  return (
    <div className="nav-buttons">
      <button
        className="btn"
        onClick={() => {
          swiper.slidePrev();
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} size={props.size} />
      </button>
      <button
        className="btn"
        onClick={() => {
          swiper.slideNext();
        }}
      >
        <FontAwesomeIcon icon={faArrowRight} size={props.size} />
      </button>
    </div>
  );
}

export default SwiperNavButtons;