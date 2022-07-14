import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      experience:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      img: "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/testimonial-4-150x150.jpg",
      name: "Ram",
      profession: "Allergist",
    },
    {
      id: 2,
      experience:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      img: "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/testimonial-2-150x150.jpg",
      name: "Sam",
      profession: "Patient",
    },
    {
      id: 3,
      experience:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      img: "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/testimonial-4-150x150.jpg",
      name: "Hari",
      profession: "Patient",
    },
    {
      id: 4,
      experience:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      img: "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/testimonial-1-150x150.jpg",
      name: "Full Name",
      profession: "Biotechnician",
    },
    {
      id: 5,
      experience:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      img: "https://a6e8z9v6.stackpathcdn.com/mediz/hospital/wp-content/uploads/sites/2/2019/12/testimonial-2-150x150.jpg",
      name: "Bishwant",
      profession: "Allergist",
    },
  ];

  return (
    <section className="max-w-[1200px] mx-auto px-2 relative -top-36">
      <h1 className="text-3xl font-bold text-primary text-center">
        Testimonial
      </h1>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard
              experience={testimonial.experience}
              img={testimonial.img}
              name={testimonial.name}
              profession={testimonial.profession}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
