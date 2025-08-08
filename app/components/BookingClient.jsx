"use client";
import { Suspense, useState } from "react";
import axios from "axios";
import Image from "next/image";
import ContactCards from "./ContactCards";
import BookingForm from "./BookingForm";


const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";
export default function BookingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    dateTime: "",
    attendees: 1,
    duration: 60,
    comments: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_BASE}/api/booking`, form);
      setMessage("Your booking request has been submitted successfully!");
      setForm({
        name: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
        phone: "",
        dateTime: "",
        attendees: 1,
        duration: 60,
        comments: "",
      });
    } catch (err) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <main className="pt-16 min-h-screen bg-pink-50  bg-ice-cream-truck bg-cover bg-center">
        <div className="max-w-3xl mx-auto p-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-pink-600 mb-8 text-center font-berkshire text-shadow-lg ">
            Book Our Ice Cream Truck
          </h1>

          {message && (
            <p
              className={`mb-6 text-center font-semibold p-3 rounded-lg shadow ${
                message.includes("error")
                  ? "text-red-600 bg-red-100"
                  : "text-green-600 bg-green-100"
              }`}
            >
              {message}
            </p>
          )}

          <Suspense
            className="bg-white rounded-lg shadow-lg p-6"
            fallback={
              <div className="text-center py-10">Loading contact info...</div>
            }
          >
            <BookingForm />
          </Suspense>
        </div>

        {/* Creating Sweet Moments Across the Greater Boston Area and Beyond */}

        {/* <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <Image
              src="/cool-cow-boston.webp"
              alt="Cool Cow Ice Cream in Boston"
              width={600}
              height={400}
              quality={75}
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              priority
            />
            <h3 className="text-xl text-pink-600 font-bold mt-4 text-center font-berkshire text-shadow-lg ">
              Spreading Smiles Across Boston and Beyond!
            </h3>
          </div>

          <div className="md:w-1/2 text-gray-800 ">
            <h2 className="text-3xl font-extrabold text-blue-600 mb-4 font-berkshire text-shadow-lg">
              Creating Sweet Moments
              <br className="hidden md:block" />
              Across the Greater Boston Area and Beyond
            </h2>
            <p className="text-lg leading-relaxed">
              Welcome to <strong>TomandJerry Ice Cream</strong> – your go-to ice
              cream truck based in Lynnfield, MA. We’ve been bringing smiles and
              scoops to families, neighborhoods, and events all across the
              Greater Boston area. From the charming{" "}
              <strong>North Shore</strong> to the scenic{" "}
              <strong>South Shore</strong>, the vibrant{" "}
              <strong>Metro West</strong> to peaceful{" "}
              <strong>Southern New Hampshire</strong> — we’ve got your next
              celebration covered.
              <br />
              <br />
              At TomandJerry, we believe in more than just serving ice cream —
              we’re here to create unforgettable experiences. Whether it's a
              birthday bash, a corporate event, or a community festival, our
              mission is simple: to spread happiness, one scoop at a time.
            </p>
          </div>
        </section> */}
        <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="overflow-hidden rounded-2xl shadow-xl border border-pink-100">
              <Image
                src="/cool-cow-boston.webp"
                alt="Cool Cow Ice Cream in Boston"
                width={600}
                height={400}
                quality={80}
                className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
            <h3 className="text-xl md:text-2xl text-pink-600 font-semibold mt-6 text-center font-berkshire drop-shadow-sm">
              Spreading Smiles Across Boston and Beyond!
            </h3>
          </div>

          <div className="md:w-1/2 text-gray-800">
            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6 font-berkshire drop-shadow-md leading-snug">
              Creating Sweet Moments
              <br className="hidden md:block" />
              Across the Greater Boston Area and Beyond
            </h2>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700">
              Welcome to{" "}
              <strong className="text-pink-600">TomandJerry Ice Cream</strong> –
              your go-to ice cream truck based in Lynnfield, MA. We’ve been
              bringing smiles and scoops to families, neighborhoods, and events
              all across the Greater Boston area. From the charming{" "}
              <strong>North Shore</strong> to the scenic{" "}
              <strong>South Shore</strong>, the vibrant{" "}
              <strong>Metro West</strong> to peaceful{" "}
              <strong>Southern New Hampshire</strong> — we’ve got your next
              celebration covered.
              <br />
              <br />
              At TomandJerry, we believe in more than just serving ice cream —
              we’re here to create unforgettable experiences. Whether it's a
              birthday bash, a corporate event, or a community festival, our
              mission is simple: to spread happiness, one scoop at a time.
            </p>
          </div>
        </section>

        <Suspense
          fallback={
            <div className="text-center py-10">Loading contact info...</div>
          }
        >
          <ContactCards />
        </Suspense>
      </main>
    </>
  );
}
