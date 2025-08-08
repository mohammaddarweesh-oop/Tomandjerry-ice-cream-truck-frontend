"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import axios from "axios";
import Image from "next/image";
import ContactCards from "./ContactCards";
import Head from "next/head";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";
export default function CharactersList({ baseUrl = API_BASE || "http://localhost:4000" }) {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const res = await axios.get(`${baseUrl}/api/characters`, {
          withCredentials: true,
        });
        setCharacters(res.data);
      } catch (err) {
        setError("Failed to fetch characters");
      } finally {
        setLoading(false);
      }
    }
    fetchCharacters();
  }, [baseUrl]);

  return (
    <>
      {/* SEO Head Tags */}
      <Head>
        <title>Our Amazing Characters</title>
        <meta
          name="description"
          content="Discover our diverse and magical characters and book your favorite one now!"
        />
      </Head>

      <section className="w-full bg-pink-50 py-16 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="text-5xl font-berkshire text-pink-600 drop-shadow-md">
            Our Amazing Characters
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the unique and creative characters that make our world magical.
          </p>
        </div>

        {loading ? (
          <p className="text-center text-gray-600 text-lg">
            Loading characters...
          </p>
        ) : error ? (
          <p className="text-center text-red-600 text-lg">Error: {error}</p>
        ) : characters.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No characters to display.
          </p>
        ) : (
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {characters.map((char) => (
              <motion.div
                key={char._id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-5 rounded-2xl shadow-xl border border-gray-100 flex flex-col"
              >
                <div className="overflow-hidden rounded-2xl mb-4">
                  <Image
                    src={`${baseUrl}${
                      char.image.startsWith("/") ? "" : "/"
                    }${char.image}`}
                    alt={char.name}
                    width={400}
                    height={250}
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {char.name}
                </h3>
                <p className="text-gray-600 text-sm text-center flex-grow">
                  {char.description}
                </p>
                <div className="mt-6 text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => router.push("/booking")}
                    className="bg-pink-600 text-white px-6 py-2 rounded-xl hover:bg-pink-700 transition"
                  >
                    Book Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      <ContactCards />
    </>
  );
}
