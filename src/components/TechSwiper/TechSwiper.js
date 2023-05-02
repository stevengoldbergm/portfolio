// import swiper, swiper modules, and swiper components for react
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Other Objects
import SwiperNavButtons from "../SwiperNavButtons/SwiperNavButtons";
import Badge from "../Badge/Badge";

// Import css
import "./TechSwiper.css"

// Create Tech Swiper
function TechSwiper({ tech }) {
  return (
    <Swiper
      modules={[Autoplay, Navigation, Pagination, Scrollbar]}
      // navigation
      // pagination={{
      //   clickable: true,
      // }}
      // scrollbar={{ draggable: true }}
      // shortSwipes={false}
      autoplay={{ delay: 2000 }}
      // autoplay={{ delay: 2000, reverseDirection: true }}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={3}
      slidesPerGroup={2}
      // initialSlide={length}
      loop={true}
      breakpoints= {{
        // when window width is >= 480px
        480: {
          slidesPerView: 4,
        },
        // when window width is >= 640px
        680: {
          slidesPerView: 4,

        },
        // when window width is >= 640px
        784: {
          slidesPerView: 2.5,
        },
        // when window width is >= 640px
        1080: {
          slidesPerView: 3,
        },
        // // when window width is >= 640px
        // 1280: {
        //   slidesPerView: 3.5,
        // },
        // // when window width is >= 640px
        // 1380: {
        //   slidesPerView: 4,
        // }
      }}
    >
      {/* Map through data to make badges */}
      {tech &&
        tech.map((badge) => {
          return (
            <SwiperSlide key={badge.id}>
              <div className="badge" key={badge.id}>
                <Badge
                  reference={badge.reference}
                  source={badge.source}
                  altText={badge.altText}
                  key={badge.id}
                />
                <p>{badge.altText}</p>
              </div>
            </SwiperSlide>
          );
        })}
      <SwiperNavButtons size="lg" />
    </Swiper>
  );
}

export default TechSwiper;