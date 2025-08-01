"use client";
import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactCards() {
  const cards = [
    {
      icon: <FaPhoneAlt className="text-3xl text-pink-600" />,
      title: "Call Us",
      description:
        "Get in touch with our team by phone to discuss your event and any questions you have.",
      action: "(458) 265-9579",
      href: "tel:+14582659579",
    },
    {
      icon: <FaEnvelope className="text-3xl text-pink-600" />,
      title: "Email Us",
      description:
        "We’ll confirm your booking and handle logistics smoothly for your special occasion.",
      action: "email@icecreamtruck.com",
      href: "mailto:email@icecreamtruck.com",
    },
    {
      icon: <FaInstagram className="text-3xl text-pink-600" />,
      title: "Follow Us",
      description:
        "Stay in the loop with our latest updates and behind-the-scenes fun on Instagram!",
      action: "@tomandJerryicecreamtruck",
      href: "https://www.instagram.com/coolicecreamtruck",
    },
  ];

  return (
    <section className="py-20 bg-pink-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-6xl mx-auto px-4 text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-pink-600 font-berkshire drop-shadow-md">
          Contact Information
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto font-['Poppins'] text-lg">
          Reach out to us anytime — we’re here to bring joy and ice cream to
          your day!
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 grid gap-10 grid-cols-1 md:grid-cols-3">
        {cards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.15 }}
            className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl hover:shadow-pink-200 transition-all duration-300 h-full border border-pink-100"
          >
            <div className="mb-5 bg-pink-100 p-4 rounded-full">{card.icon}</div>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 font-['Poppins']">
              {card.title}
            </h3>
            <p className="text-gray-600 text-sm mb-6">{card.description}</p>
            <a
              href={card.href}
              className="mt-auto text-pink-600 font-medium hover:underline text-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {card.action}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
