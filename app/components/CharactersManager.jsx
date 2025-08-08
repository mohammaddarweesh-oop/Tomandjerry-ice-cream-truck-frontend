"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: null,
  });
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchCharacters();
  }, []);

  async function fetchCharacters() {
    try {
      const res = await axios.get(`${baseUrl}/api/characters`, {
        withCredentials: true,
      });
      setCharacters(res.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch characters");
      setLoading(false);
    }
  }

  function handleInputChange(e) {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData((prev) => ({ ...prev, image: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!formData.name || (!formData.image && !editId)) {
      setError("Name and image are required");
      return;
    }

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("description", formData.description);
      if (formData.image) form.append("image", formData.image);

      let res;
      if (editId) {
        res = await axios.put(
          `${baseUrl}/api/characters/${editId}`,
          form,
          {
            headers: { "Content-Type": "multipart/form-data" },
            withCredentials: true,
          }
        );
        setMessage("Character updated successfully");
      } else {
        res = await axios.post(`${baseUrl}/api/characters`, form, {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        });
        setMessage("Character added successfully");
      }

      setFormData({ name: "", description: "", image: null });
      setEditId(null);
      fetchCharacters();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to save character");
    }
  }

  async function handleDelete(id) {
    if (!confirm("Are you sure you want to delete this character?")) return;
    try {
      await axios.delete(`${baseUrl}/api/characters/${id}`, {
        withCredentials: true,
      });
      setMessage("Character deleted successfully");
      fetchCharacters();
    } catch (err) {
      alert("Failed to delete character");
    }
  }

  function startEdit(character) {
    setEditId(character._id);
    setFormData({
      name: character.name,
      description: character.description,
      image: null,
    });
    setError("");
    setMessage("");
  }

  function cancelEdit() {
    setEditId(null);
    setFormData({ name: "", description: "", image: null });
    setError("");
    setMessage("");
  }

  return (
    <section className="p-6 max-w-5xl mx-auto pt-16 text-black">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6 text-center"
      >
        Characters Management
      </motion.h1>

      <AnimatePresence>
        {(message || error) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`mb-6 text-center font-semibold p-3 rounded-lg shadow ${
              error ? "text-red-600 bg-red-100" : "text-green-600 bg-green-100"
            }`}
          >
            {error || message}
          </motion.p>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={cancelEdit}
        className="mb-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
        aria-label={editId ? "Cancel Edit" : "Add New Character"}
      >
        {editId ? "Cancel Edit" : "Add New Character"}
      </motion.button>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6 mb-8"
      >
        <h2 className="text-xl font-semibold text-pink-600 mb-4">
          {editId ? "Edit Character" : "Add Character"}
        </h2>
        <form
          onSubmit={handleSubmit}
          className="grid gap-4 md:grid-cols-2"
          encType="multipart/form-data"
        >
          <div>
            <label htmlFor="name" className="block text-gray-700 mb-1">
              Name
            </label>
            <input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Character name"
              className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
              aria-required="true"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-gray-700 mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Character description"
              className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
              rows={4}
              aria-label="Character description"
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="image" className="block text-gray-700 mb-1">
              Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleInputChange}
              required={!editId}
              aria-required={!editId}
            />
          </div>
          <div className="md:col-span-2">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition shadow-md"
              aria-label={editId ? "Update Character" : "Add Character"}
            >
              {editId ? "Update Character" : "Add Character"}
            </motion.button>
          </div>
        </form>
      </motion.div>

      {loading ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600"
        >
          Loading characters...
        </motion.p>
      ) : characters.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center text-gray-600"
        >
          No characters found. Add a new character to get started.
        </motion.p>
      ) : (
        <div className="grid gap-6 md:grid-cols-3">
          {characters.map((char) => (
            <motion.div
              key={char._id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100 flex flex-col"
            >
              <Image
                src={`${baseUrl}${
                  char.image.startsWith("/") ? "" : "/"
                }${char.image}`}
                alt={char.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover rounded-2xl mb-4"
              />
              <h3 className="text-lg font-semibold mb-2">{char.name}</h3>
              <p className="text-gray-700 flex-grow">{char.description}</p>
              <div className="flex space-x-2 mt-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => startEdit(char)}
                  className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                  aria-label={`Edit character ${char.name}`}
                >
                  Edit
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleDelete(char._id)}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                  aria-label={`Delete character ${char.name}`}
                >
                  Delete
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
