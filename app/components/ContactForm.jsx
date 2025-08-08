"use client";

import { useState } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg(null);
    setError(null);

    try {
      const res = await axios.post(`${API_BASE}/api/contactus`, form);
      setResponseMsg(res.data.message || "Message sent successfully!");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (err) {
      setError(
        err.response?.data?.error ||
          "An error occurred while sending the message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-90 rounded-lg shadow-lg p-8 grid gap-6 md:grid-cols-2"
      aria-label="Contact Us Form"
    >
      <AnimatePresence>
        {responseMsg && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:col-span-2 mb-6 text-center font-semibold p-3 rounded-lg shadow bg-green-100 text-green-600"
          >
            {responseMsg}
          </motion.p>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:col-span-2 mb-6 text-center font-semibold p-3 rounded-lg shadow bg-red-100 text-red-600"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>

      <div>
        <label htmlFor="name" className="block text-gray-700 mb-1 font-semibold">
          Name
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          placeholder="Enter your name"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 text-black"
          aria-required="true"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-gray-700 mb-1 font-semibold"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 text-black"
          aria-required="true"
        />
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-gray-700 mb-1 font-semibold"
        >
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Enter your phone number (optional)"
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 text-black"
        />
      </div>

      <div className="md:col-span-2">
        <label
          htmlFor="message"
          className="block text-gray-700 mb-1 font-semibold"
        >
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          placeholder="Write your message here"
          rows={5}
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 text-black"
          aria-required="true"
        />
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        disabled={loading}
        className="md:col-span-2 bg-pink-600 text-white py-3 rounded-md hover:bg-pink-700 transition shadow-md disabled:opacity-50"
        aria-label="Send contact message"
      >
        {loading ? "Sending..." : "Send"}
      </motion.button>
    </form>
  );
}
