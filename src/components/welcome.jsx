import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IMG1 from "../assets/images/garden1.jpg";
import IMG2 from "../assets/images/landscape1.jpg";
import IMG3 from "../assets/images/main.jpg";
import IMG4 from "../assets/images/bedroom1.jpg";
import IMG5 from "../assets/images/pool1.jpg";
import IMG6 from "../assets/images/bedroom2.jpg";

export default function Welcome() {
  const sliderSettings = {
    infinite: true,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false, // Optional: Remove arrows if you don't want them
  };

  return (
    <section className="pt-10">
      <div className="container mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-base font-thin text-white lg:text-xl">
            Welcome to
            <br />
            <span className="text-6xl fontTitle"> Villa De Azores, Goa </span>
          </h1>
          <p className="mt-6 text-white">
            Experience next-level luxury at Villa the Azores. This vast 6-BHK
            property, distinctively designed with Portuguese-style architecture,
            offers a personal sauna, steam room, and a stunning lounge with a
            moon roof. Enjoy a private pool, lush lawns, and modern amenities
            for an unforgettable Goan getaway.
          </p>
          <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-cyan-700 rounded-lg hover:bg-cyan-900 lg:mx-0 lg:w-auto focus:outline-none">
            Book Now
          </button>
          <p className="mt-3 text-sm text-red-500 font-semibold">"Contact us for discounts"</p>
        </div>

        <div className="flex justify-center mt-10 p-2">
          <div className="w-full lg:w-4/5 mx-4">
            {" "}
            {/* Restrict slider width */}
            <Slider {...sliderSettings}>
              <div>
                <img
                  className="object-cover w-full h-96 rounded-xl"
                  src={IMG1}
                  alt="Slide 1"
                />
              </div>
              <div>
                <img
                  className="object-cover w-full h-96 rounded-xl"
                  src={IMG2}
                  alt="Slide 2"
                />
              </div>
              <div>
                <img
                  className="object-cover w-full h-96 rounded-xl"
                  src={IMG3}
                  alt="Slide 3"
                />
              </div>
              <div>
                <img
                  className="object-cover w-full h-96 rounded-xl"
                  src={IMG4}
                  alt="Slide 4"
                />
              </div>
              <div>
                <img
                  className="object-cover w-full h-96 rounded-xl"
                  src={IMG5}
                  alt="Slide 5"
                />
              </div>
              <div>
                <img
                  className="object-cover w-full h-96 rounded-xl"
                  src={IMG6}
                  alt="Slide 6"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
