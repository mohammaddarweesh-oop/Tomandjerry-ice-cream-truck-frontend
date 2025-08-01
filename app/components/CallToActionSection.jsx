"use client";
import Image from "next/image";
import Link from "next/link";

export default function CallToActionSection() {
  return (
    <section className="relative bg-gradient-to-br from-pink-100 to-blue-100 py-16 overflow-hidden">
      <div className="absolute bottom-0 w-full -mb-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            className="fill-pink-200"
            d="M615.2,96.7C240.2,97.8,0,18.9,0,0v100h1000V0C1000,19.2,989.8,96,615.2,96.7z"
          ></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Image */}
        <div className="hidden md:block">
          <Image
            src="https://cdn-empai.nitrocdn.com/jyFySAmAGuQhHUwxAiQokXXIzJzKWpiK/assets/images/optimized/rev-187f331/coolcowicecream.com/wp-content/uploads/2024/03/Cool-Cow-Ice-Cream-CTA-Service.jpeg"
            alt="Ice Cream Truck"
            width={600}
            height={400}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold text-pink-700 mb-4">
            Make A Sweet Memory By Booking Your Next Event With Cool Cow
          </h2>
          <p className="text-gray-700 mb-6">
            Join us for your next event at Cool Cow, where the vibe is always
            chill and the fun never stops. With our laid-back atmosphere,
            delicious treats, and friendly service, your next event is
            guaranteed to be a blast.
          </p>
          <Link href="/booking" className="relative inline-block">
            <span className="relative z-10 inline-block bg-pink-600 text-white font-bold px-6 py-3 rounded-md hover:bg-pink-700 transition shadow-lg">
              Book Now
            </span>
            <span className="absolute top-0 left-0 w-full h-full border-2 border-pink-300 rounded-md animate-ping"></span>
          </Link>
        </div>

        {/* Image for mobile only */}
        <div className="md:hidden">
          <Image
            src="https://cdn-empai.nitrocdn.com/jyFySAmAGuQhHUwxAiQokXXIzJzKWpiK/assets/images/optimized/rev-187f331/coolcowicecream.com/wp-content/uploads/2024/03/Ice-Cream-Outdoor-Outing-CTA-scaled-1.jpeg"
            alt="Outdoor Ice Cream"
            width={600}
            height={400}
            className="rounded-xl shadow-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
