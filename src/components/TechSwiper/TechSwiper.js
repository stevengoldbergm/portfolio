// import swiper, swiper modules, and swiper components for react
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Other Objects
import SwiperNavButtons from "../SwiperNavButtons/SwiperNavButtons";
import Badge from "../Badge/Badge";


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
      shortSwipes={false}
      autoplay={{ delay: 2000, reverseDirection: true }}
      grabCursor={true}
      spaceBetween={1}
      slidesPerView={3}
      slidesPerGroup={2}
      // initialSlide={length}
      loop={true}
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