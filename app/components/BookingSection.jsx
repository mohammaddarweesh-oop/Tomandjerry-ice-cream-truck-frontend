
"use client";
import Image from "next/image";
// import BookingForm from "./BookingForm";

import dynamic from "next/dynamic";

const BookingForm = dynamic(() => import("./BookingForm"), {
  ssr: false,
});


export default function BookingSection() {
  return (
    <section className="bg-pink-50  py-16 px-4 sm:px-6 md:px-12 lg:py-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 relative">
          <div className="rounded-2xl overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105">
            <Image
              src="/ice.jpg"
              alt="Ice Cream Truck Booking"
              width={800}
              height={600}
              className="w-full h-auto object-cover"
              priority
              placeholder="blur"
              blurDataURL="/placeholder-ice-cream-truck.jpg"
            />
            <div className="absolute inset-0 bg-pink-600 opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-2xl"></div>
          </div>
          <h3 className="font-berkshire text-shadow-lg mt-6 text-center text-2xl md:text-3xl font-semibold text-pink-600 font-poppins">
            Make Your Event Sweet & Unforgettable!
          </h3>
        </div>

        {/* Right Form Section */}
        <div className="w-full md:w-1/2 bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          <h2 className="font-berkshire text-shadow-lg text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-6 font-poppins leading-tight">
            Book Our Ice Cream Truck
          </h2>
          <p className="text-gray-600 mb-8 text-base sm:text-lg font-poppins">
            Bring joy to your event with our delicious treats! Fill out the form
            below to get started.
          </p>
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
