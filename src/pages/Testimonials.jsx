import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";

const TestimonialSlider = () => {
  const testimonials = [
    {
      name: "John Doe",
      position: "CEO, Company A",
      image: "/ceo1.jpg", // Correct image reference for public folder
      text: "The service was exceptional! It helped us achieve milestones we never thought possible.",
    },
    {
      name: "Jane Smith",
      position: "Manager, Company B",
      image: "/ceo2.jpg",
      text: "A truly remarkable experience. The team went above and beyond to meet our needs.",
    },
    {
      name: "Michael Johnson",
      position: "Freelancer",
      image: "/ceo3.jpg",
      text: "The professionalism and attention to detail were top-notch. I highly recommend them!",
    },
    {
      name: "Emily Davis",
      position: "Entrepreneur",
      image: "/ceo4.jpg",
      text: "Amazing team and fantastic results. They exceeded all my expectations!",
    },
    {
        name: "Emily Davis",
        position: "Entrepreneur",
        image: "/ceo4.jpg",
        text: "Amazing team and fantastic results. They exceeded all my expectations!",
      },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true, // Enables the right-to-left sliding effect
    arrows: false,
  };

  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Testimonials
        </h2>
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-4">
              <div className="bg-white p-8 rounded-lg shadow-lg w-full flex flex-col items-center text-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-36 h-36 rounded-full mb-6 border-4 border-blue-500 shadow-md" // Adjusted size here
                />
                <h3 className="text-2xl font-bold text-gray-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{testimonial.position}</p>
                <p className="text-gray-600 italic leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
