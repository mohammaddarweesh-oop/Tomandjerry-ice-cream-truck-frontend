"use client";

import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const offers = [
  {
    title: "Package 1",
    price: "$200",
    people: "up to 30 people",
    extra: "$4 for each additional ice cream",
    duration: "30 to 45 minutes",
  },
  {
    title: "Package 2",
    price: "$250",
    people: "up to 50 people",
    extra: "$4 for each additional ice cream",
    duration: "30 to 45 minutes",
  },
  {
    title: "Package 3",
    price: "$450",
    people: "up to 100 people",
    extra: "$3.5 for each additional ice cream",
    duration: "1 to 1.5 hours",
  },
  {
    title: "Package 4",
    price: "$800",
    people: "up to 200 people",
    extra: "$3 for each additional ice cream",
    duration: "No fixed time; we serve till satisfaction",
  },
];

export default function OffersSlider() {
  const router = useRouter();

  const handleClick = (offer) => {
    const query = new URLSearchParams({
      title: offer.title,
      price: offer.price,
      people: offer.people,
      extra: offer.extra,
      duration: offer.duration,
    }).toString();

    router.push(`/booking?${query}`);
  };

  return (
    <section className="pt-0 pb-12 px-4 bg-pink-50 w-full">
      <h2 className="text-4xl md:text-5xl font-bold text-pink-600 mb-8 text-center font-berkshire text-shadow-lg">
        Our Special Packages <span className="text-pink-600 ">(2025)</span>
      </h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {offers.map((offer, index) => (
          <SwiperSlide key={index}>
            <div
              onClick={() => handleClick(offer)}
              className="cursor-pointer bg-white shadow-[0_10px_25px_rgba(255,192,203,0.2)] hover:shadow-[0_15px_30px_rgba(255,105,180,0.3)] transition duration-300 rounded-2xl p-6 border border-pink-100 text-gray-800"
            >
              <h3 className="text-xl font-bold text-pink-600 mb-2">
                {offer.title}
              </h3>
              <p className="text-lg font-semibold mb-1">{offer.price}</p>
              <p className="text-sm mb-1">👥 {offer.people}</p>
              <p className="text-sm mb-1">➕ {offer.extra}</p>
              <p className="text-sm">🕒 {offer.duration}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
