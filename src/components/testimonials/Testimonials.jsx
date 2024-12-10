import React from "react";
import "./testimonials.css";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { fadeInOut } from "../../motions";

const Testimonials = () => {
  return (
    <motion.section 
    variants={fadeInOut("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
    
    
    className="testimonial container section" id="testimonials">
      <h2 className="section__title">My Clients Say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Swiper
        className="testimonial__container"
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination, Navigation, Autoplay]} // Include Navigation module
        onMouseEnter={(swiper) => swiper.autoplay.stop()} // Pause autoplay on hover
        onMouseLeave={(swiper) => swiper.autoplay.start()} // Resume autoplay on mouse leave
      >
        {Data.map(({ id, image, title,profession, description }) => (
          <SwiperSlide className="testimonial__card" key={id}>
            <img src={image} alt={title} className="testimonial__img" />
            <h3 className="testimonial__name">{title}</h3>
            <h5 className="testimonial__profession">{profession}</h5>
            <p className="testimonial__description">{description}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default Testimonials;
