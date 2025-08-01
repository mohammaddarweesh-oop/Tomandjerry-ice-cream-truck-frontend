"use client";

import { motion } from "framer-motion";

export default function IntroSection() {
  return (
    <section className="pt-20 bg-gradient-to-r from-blue-100 to-pink-100 py-16 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-pink-700 mb-4">
          Sweet Moments Delivered to You
        </h2>
        <p className="text-lg text-gray-700">
          Whether you're planning a birthday bash, a corporate gathering, or
          just want to surprise your neighborhood with ice cream, our truck is
          ready to roll!
        </p>
      </motion.div>
    </section>
  );
}
