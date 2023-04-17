// import swiper, swiper modules, and swiper components for react
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import other components
import Overlay from "../Overlay/Overlay";
import ProjectCard from "../ProjectCard/ProjectCard";
import SwiperNavButtons from "../SwiperNavButtons/SwiperNavButtons";

// Import Data
import projects from "../../assets/data/projects";

// Import css
import './Carousel.css'

// Create Carousel component
function Carousel() {
  return (
    <>
      {/* test carousel */}
      <div className="carousel">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, Scrollbar]}
          pagination={{
            clickable: true,
          }}
          // spaceBetween={0}
          slidesPerView={4}
          slidesPerGroup={2}
          // initialSlide={projects.length}
          autoplay={{ delay: 2000 }}
          grabCursor={true}
          // rewind={true}
        >
          {projects.map((project) => {
            return (
              <Overlay key={project.id}>
                <SwiperSlide key={project.id}>
                  <ProjectCard project={project} />
                </SwiperSlide>{" "}
              </Overlay>
            );
          })}
          <SwiperNavButtons size="3x" />
        </Swiper>
      </div>
    </>
  );
}

export default Carousel;