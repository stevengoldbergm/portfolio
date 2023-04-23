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
          slidesPerView={1}
          slidesPerGroup={1}
          // initialSlide={projects.length}
          autoplay={{ delay: 2000 }}
          grabCursor={true}
          breakpoints= {{
            // when window width is >= 480px
            480: {
              slidesPerView: 1.5,
            },
            // when window width is >= 640px
            680: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            880: {
              slidesPerView: 2.5,
            },
            // when window width is >= 640px
            1080: {
              slidesPerView: 3,
            },
            // when window width is >= 640px
            1280: {
              slidesPerView: 3.5,
            },
            // when window width is >= 640px
            1380: {
              slidesPerView: 4,
            }
          }}
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