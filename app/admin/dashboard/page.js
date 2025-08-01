"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import CharactersManager from "@/app/components/CharactersManager";


export default function AdminDashboard() {
  const router = useRouter();
  const [bookings, setBookings] = useState([]);
  const [loadingBookings, setLoadingBookings] = useState(true);
  const [errorBookings, setErrorBookings] = useState(null);
  const [editingBooking, setEditingBooking] = useState(null);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    dateTime: "",
    attendees: 0,
    duration: 0,
    comments: "",
    completed: false,
  });
  const [imageFile, setImageFile] = useState(null);



  const [bookingMessage, setBookingMessage] = useState(null);

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [errorProducts, setErrorProducts] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({
    title: "",
    description: "",
    size: "", 
    price: "",
    image: "",
  });
  const [productMessage, setProductMessage] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axios.get("http://localhost:4000/api/admin/session", {
          withCredentials: true,
        });

        fetchProducts();
        fetchBookings();
      } catch (error) {
        router.replace("/admin");
      }
    };

    checkAuth();
  }, []);

  const fetchBookings = async () => {
    setLoadingBookings(true);
    try {
      const res = await axios.get("http://localhost:4000/api/admin/bookings", {
        withCredentials: true,
      });
      setBookings(res.data.bookings || []);
      console.log("Booking : ", res.data);

      setErrorBookings(null);
    } catch {
      setErrorBookings("Failed to fetch bookings");
    } finally {
      setLoadingBookings(false);
    }
  };

  const handleBookingChange = (e) =>
    setBookingForm({ ...bookingForm, [e.target.name]: e.target.value });

  const startEditBooking = (booking) => {
    setEditingBooking(booking);
    setBookingForm({
      name: booking.name || "",
      email: booking.email || "",
      address: booking.address || "",
      city: booking.city || "",
      zipCode: booking.zipCode || "",
      phone: booking.phone || "",
      dateTime: booking.dateTime || "",
      attendees: booking.attendees || 0,
      duration: booking.duration || 0,
      comments: booking.comments || "",
      completed: booking.completed || false,

    });
    setBookingMessage(null);
  };

  const cancelEditBooking = () => {
    setEditingBooking(null);
    setBookingForm({
        name: "",
        email: "",
        address: "",
        city: "",
        zipCode: "",
        phone: "",
        dateTime: "",
        attendees: 0,
        duration: 0,
        comments: "",
        completed: false,
    });
    setBookingMessage(null);
  };

  const handleDeleteBooking = async (id) => {
    if (!confirm("Are you sure you want to delete this booking?")) return;
    try {
      await axios.delete(`http://localhost:4000/api/admin/bookings/${id}`, {
        withCredentials: true,
      });
      setBookingMessage("Booking deleted successfully");
      fetchBookings();
    } catch {
      setBookingMessage("An error occurred while deleting the booking");
    }
  };

  const handleSubmitBooking = async (e) => {
    e.preventDefault();

    try {
      if (editingBooking) {
        await axios.put(
          `http://localhost:4000/api/admin/bookings/${editingBooking._id}`,
          bookingForm,
          { withCredentials: true }
        );
        setBookingMessage("Booking updated successfully");
      } else {
        await axios.post("http://localhost:4000/api/booking", bookingForm);
        setBookingMessage("Booking added successfully");
      }
      cancelEditBooking();
      fetchBookings();
    } catch (err) {
      setBookingMessage("An error occurred while saving the booking");
    }
  };

  const toggleCompleteBooking = async (booking) => {
    if (booking.completed) return; 

    try {
      await axios.put(
        `http://localhost:4000/api/admin/bookings/${booking._id}`,
        { ...booking, completed: true },
        { withCredentials: true }
      );
      setBookingMessage("Booking marked as completed");
      fetchBookings();
    } catch {
      setBookingMessage("Failed to update booking status");
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:4000/api/admin/logout",
        {},
        { withCredentials: true }
      );
      router.replace("/admin");
    } catch (error) {
      alert("Failed to log out.");
    }
  };

  const fetchProducts = async () => {
    setLoadingProducts(true);
    try {
      const res = await axios.get("http://localhost:4000/api/products");
      setProducts(res.data || []);
      console.log("products : ", res.data);
      setErrorProducts(null);
    } catch {
      setErrorProducts("Failed to fetch products");
    } finally {
      setLoadingProducts(false);
    }
  };

  const handleImageChange = (e) => {
  if (e.target.files && e.target.files[0]) {
    setImageFile(e.target.files[0]);
  }
};
  const handleProductChange = (e) =>
    setProductForm({ ...productForm, [e.target.name]: e.target.value });

  const startEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      title: product.title,
      description: product.description,
      price: product.price,
      size: product.size || "",
      image: product.image || "",
    });
    setProductMessage(null);
  };

  const cancelEditProduct = () => {
    setEditingProduct(null);
    setProductForm({ title: "", description: "", price: "", image: "" });
    setProductMessage(null);
  };

  const handleDeleteProduct = async (id) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    try {
      await axios.delete(`http://localhost:4000/api/products/${id}`, {
        withCredentials: true,
      });
      setProductMessage("Product deleted successfully");
      fetchProducts();
    } catch {
      setProductMessage("An error occurred while deleting the product");
    }
  };


  const handleSubmitProduct = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", productForm.title);
  formData.append("description", productForm.description);
  formData.append("price", productForm.price);
  formData.append("size", productForm.size);

  if (imageFile) {
    formData.append("image", imageFile);
  }

  try {
    let res;
    if (editingProduct) {
      res = await axios.put(
        `http://localhost:4000/api/products/${editingProduct._id}`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setProductMessage("Product updated successfully");
    } else {
      res = await axios.post(
        "http://localhost:4000/api/products",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setProductMessage("Product added successfully");
    }
    cancelEditProduct();
    fetchProducts();
  } catch {
    setProductMessage("An error occurred while saving the product");
  }
};

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-pink-600">TomandJerry Ice</h1>
        <div className="space-x-4">
          <Link href="/" className="text-black hover:text-pink-500">
            Home
          </Link>
          <Link href="/booking" className="text-black hover:text-pink-500">
            Booking
          </Link>
          <Link href="/about" className="text-black hover:text-pink-500">
            About Us
          </Link>
          <button
            onClick={handleLogout}
            className="text-black hover:text-pink-500 font-semibold px-3 py-1 rounded-md transition cursor-pointer bg-transparent border border-pink-600 hover:bg-pink-600 hover:text-white"
            aria-label="Logout"
          >
            Logout
          </button>
        </div>
      </nav>
      <main className="pt-20 min-h-screen bg-gradient-to-b from-pink-100 to-blue-100 p-6">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* ----------- الإحصاءات ----------- */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Total Products
              </h3>
              {loadingProducts ? (
                <p className="text-gray-500">Loading...</p>
              ) : errorProducts ? (
                <p className="text-red-600">{errorProducts}</p>
              ) : (
                <p className="text-4xl font-bold text-pink-600">
                  {products.length}
                </p>
              )}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Booking Statistics
              </h3>
              {loadingBookings ? (
                <p className="text-gray-500">Loading...</p>
              ) : errorBookings ? (
                <p className="text-red-600">{errorBookings}</p>
              ) : (
                <>
                  <p className="text-4xl font-bold text-pink-600">
                    {bookings.length}
                  </p>
                  <p className="text-lg text-gray-700">
                    Completed: {bookings.filter((b) => b.completed).length}
                  </p>
                  <p className="text-lg text-gray-700">
                    Pending: {bookings.filter((b) => !b.completed).length}
                  </p>
                </>
              )}
            </motion.div>
          </section>
          {/* ----------- الحجوزات ----------- */}
          <section>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6 text-center"
            >
              Admin Dashboard - Bookings
            </motion.h1>

            <AnimatePresence>
              {bookingMessage && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`mb-6 text-center font-semibold p-3 rounded-lg shadow ${
                    bookingMessage.toLowerCase().includes("error")
                      ? "text-red-600 bg-red-100"
                      : "text-green-600 bg-green-100"
                  }`}
                >
                  {bookingMessage}
                </motion.p>
              )}
              {errorBookings && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 text-center text-red-600 font-semibold bg-red-100 p-3 rounded-lg shadow"
                >
                  {errorBookings}
                </motion.p>
              )}
            </AnimatePresence>

            {loadingBookings ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-600"
              >
                Loading bookings...
              </motion.p>
            ) : bookings.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-600"
              >
                No bookings found. Add a new booking to get started.
              </motion.p>
            ) : ( "")}

            <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={cancelEditBooking}
                  className="mb-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
                  aria-label={
                    editingBooking ? "Cancel Edit" : "Add New Booking"
                  }
                >
                  {editingBooking ? "Cancel Edit" : "Add New Booking"}
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg p-6 mb-8"
                >
                  <h2 className="text-xl font-semibold text-pink-600 mb-4">
                    {editingBooking ? "Edit Booking" : "Add Booking"}
                  </h2>
                  <form
                    onSubmit={handleSubmitBooking}
                    className="grid gap-4 md:grid-cols-2"
                  >
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-gray-700 mb-1"
                      >
                        Name
                      </label>
                      <input
                        name="name"
                        value={bookingForm.name}
                        onChange={handleBookingChange}
                        required
                        placeholder="Enter name"
                        className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 text-black"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-gray-700 mb-1"
                      >
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={bookingForm.email}
                        onChange={handleBookingChange}
                        required
                        placeholder="Enter email"
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="address"
                        className="block text-gray-700 mb-1"
                      >
                        Address
                      </label>
                      <input
                        name="address"
                        value={bookingForm.address || ""}
                        onChange={handleBookingChange}
                        required
                        placeholder="Enter address"
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="city"
                        className="block text-gray-700 mb-1"
                      >
                        City
                      </label>
                      <input
                        name="city"
                        value={bookingForm.city}
                        onChange={handleBookingChange}
                        required
                        placeholder="Enter city"
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="zipCode"
                        className="block text-gray-700 mb-1"
                      >
                        Zip Code
                      </label>
                      <input
                        name="zipCode"
                        value={bookingForm.zipCode}
                        onChange={handleBookingChange}
                        required
                        placeholder="Enter zip code"
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 mb-1"
                      >
                        Phone
                      </label>
                      <input
                        name="phone"
                        value={bookingForm.phone}
                        onChange={handleBookingChange}
                        required
                        placeholder="Enter phone"
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="dateTime"
                        className="block text-gray-700 mb-1"
                      >
                        Event Date & Time
                      </label>
                      <input
                        name="dateTime"
                        type="datetime-local"
                        value={bookingForm.dateTime}
                        onChange={handleBookingChange}
                        required
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="attendees"
                        className="block text-gray-700 mb-1"
                      >
                        Attendees
                      </label>
                      <input
                        name="attendees"
                        type="number"
                        value={bookingForm.attendees}
                        onChange={handleBookingChange}
                        placeholder="Number of attendees"
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="duration"
                        className="block text-gray-700 mb-1"
                      >
                        Duration (hours)
                      </label>
                      <input
                        name="duration"
                        type="number"
                        value={bookingForm.duration}
                        onChange={handleBookingChange}
                        placeholder="Duration in hours"
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="comments"
                        className="block text-gray-700 mb-1"
                      >
                        Additional Details
                      </label>
                      <textarea
                        name="comments"
                        value={bookingForm.comments}
                        onChange={handleBookingChange}
                        placeholder="Any special requests?"
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                        rows={4}
                        aria-label="Additional details"
                      />
                    </div>
                    <div className="md:col-span-2 flex items-center">
                      <input
                        type="checkbox"
                        name="completed"
                        checked={bookingForm.completed}
                        onChange={handleBookingChange}
                        className="mr-2"
                        id="completed-checkbox"
                      />
                      <label
                        htmlFor="completed-checkbox"
                        className="text-gray-700 font-semibold"
                      >
                        Completed
                      </label>
                    </div>
                    <div className="md:col-span-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition shadow-md"
                        aria-label={
                          editingBooking ? "Update Booking" : "Add Booking"
                        }
                      >
                        {editingBooking ? "Update Booking" : "Add Booking"}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2">
                  {bookings.map((b) => (
                    <motion.div
                      key={b._id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`bg-white p-6 rounded-xl shadow-lg border border-gray-100 ${
                        b.completed ? "opacity-60" : ""
                      }`}
                    >
                      <div className="flex flex-col md:flex-row justify-between">
                        <div className="mb-4 md:mb-0 space-y-1">
                          <p className="font-semibold text-gray-800">
                            <span className="text-pink-600">Name:</span>{" "}
                            {b.name}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold text-blue-600">
                              Email:
                            </span>{" "}
                            {b.email}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold text-blue-600">
                              Address:
                            </span>{" "}
                            {b.address}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold text-blue-600">
                              City:
                            </span>{" "}
                            {b.city}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold text-blue-600">
                              Zip Code:
                            </span>{" "}
                            {b.zipCode}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold text-blue-600">
                              Phone:
                            </span>{" "}
                            {b.phone}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold text-blue-600">
                              Date & Time:
                            </span>{" "}
                            {b.dateTime}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold text-blue-600">
                              Attendees:
                            </span>{" "}
                            {b.attendees}
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold text-blue-600">
                              Duration:
                            </span>{" "}
                            {b.duration} hours
                          </p>
                          <p className="text-gray-700">
                            <span className="font-semibold text-blue-600">
                              Notes:
                            </span>{" "}
                            {b.comments || "None"}
                          </p>
                          <p
                            className={`mt-2 font-semibold ${
                              b.completed ? "text-green-600" : "text-gray-500"
                            }`}
                          >
                            Status:{" "}
                            {b.completed ? "Completed ✅" : "Pending ⏳"}
                          </p>
                        </div>
                        <div className="flex flex-col space-y-2">
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => startEditBooking(b)}
                            className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                            aria-label={`Edit booking for ${b.name}`}
                          >
                            Edit
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleDeleteBooking(b._id)}
                            className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                            aria-label={`Delete booking for ${b.name}`}
                          >
                            Delete
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => toggleCompleteBooking(b)}
                            className={`px-4 py-2 rounded-md transition ${
                              b.completed
                                ? "bg-gray-400 text-white cursor-not-allowed"
                                : "bg-green-600 text-white hover:bg-green-700"
                            }`}
                            disabled={b.completed}
                            aria-label={`Mark booking for ${b.name} as completed`}
                          >
                            {b.completed ? "Completed" : "Mark as Completed"}
                          </motion.button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>
          </section>

          {/* ----------- المنتجات ----------- */}
          <section>
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-extrabold text-blue-600 mb-6 text-center"
            >
              Admin Dashboard - Products
            </motion.h1>

            <AnimatePresence>
              {productMessage && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className={`mb-6 text-center font-semibold p-3 rounded-lg shadow ${
                    productMessage.includes("error")
                      ? "text-red-600 bg-red-100"
                      : "text-green-600 bg-green-100"
                  }`}
                >
                  {productMessage}
                </motion.p>
              )}
              {errorProducts && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="mb-6 text-center text-red-600 font-semibold bg-red-100 p-3 rounded-lg shadow"
                >
                  {errorProducts}
                </motion.p>
              )}
            </AnimatePresence>

            {loadingProducts ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-600"
              >
                Loading products...
              </motion.p>
            ) : products.length === 0 ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-gray-600"
              >
                No products found. Add a new product to get started.
              </motion.p>
            ) : 'ddd'}

           <>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={cancelEditProduct}
                  className="mb-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition shadow-md"
                  aria-label={
                    editingProduct ? "Cancel Edit" : "Add New Product"
                  }
                >
                  {editingProduct ? "Cancel Edit" : "Add New Product"}
                </motion.button>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white rounded-lg shadow-lg p-6 mb-8"
                >
                  <h2 className="text-xl font-semibold text-pink-600 mb-4">
                    {editingProduct ? "Edit Product" : "Add Product"}
                  </h2>
                  <form
                    onSubmit={handleSubmitProduct}
                    className="grid gap-4 md:grid-cols-2"
                  >
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-gray-700 mb-1"
                      >
                        Title
                      </label>
                      <input
                        name="title"
                        value={productForm.title}
                        onChange={handleProductChange}
                        required
                        placeholder="Product title"
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 "
                        aria-required="true"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="price"
                        className="block text-gray-700 mb-1"
                      >
                        Price
                      </label>
                      <input
                        name="price"
                        type="number"
                        value={productForm.price}
                        onChange={handleProductChange}
                        required
                        placeholder="Product price"
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                        aria-required="true"
                        step="0.01"
                        min="0"
                      />
                    </div>
                    <div>
                      <label htmlFor="size" className="block text-gray-700 mb-1">Size</label>
                      <input
                        name="size"
                        value={productForm.size || ""}
                        onChange={handleProductChange}
                        placeholder="Product size"
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="description"
                        className="block text-gray-700 mb-1"
                      >
                        Description
                      </label>
                      <textarea
                        name="description"
                        value={productForm.description}
                        onChange={handleProductChange}
                        placeholder="Product description"
                        className="text-black w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600"
                        rows={4}
                        aria-label="Product description"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label
                        htmlFor="image"
                        className="block text-gray-700 mb-1"
                      >
                        Image URL
                      </label>
                      <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition shadow-md"
                        aria-label={
                          editingProduct ? "Update Product" : "Add Product"
                        }
                      >
                        {editingProduct ? "Update Product" : "Add Product"}
                      </motion.button>
                    </div>
                  </form>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-3">
                  {products.map((p) => (
                    <motion.div
                      key={p._id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="bg-white p-2 rounded-2xl shadow-lg border border-gray-100"
                    >

                      <Image
                        src={`http://localhost:4000${p.image.startsWith("/") ? "" : "/"}${p.image}`}
                        alt={p.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover rounded-2xl mb-4"
                      />
                      <h3 className="text-lg font-semibold mb-2 text-black">{p.title}</h3>
                      <hr/>
                      <p className="text-gray-700 mb-2">{p.description}</p>
                      <p className="font-semibold text-pink-600 mb-4">
                        ${p.price}
                      </p>
                      <div className="flex space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => startEditProduct(p)}
                          className="bg-yellow-400 text-black px-4 py-2 rounded-md hover:bg-yellow-500 transition"
                          aria-label={`Edit product ${p.title}`}
                        >
                          Edit
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleDeleteProduct(p._id)}
                          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
                          aria-label={`Delete product ${p.title}`}
                        >
                          Delete
                        </motion.button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </>

          </section>

          {/* ---------- الكركترز------------------ */}

          <CharactersManager />

        </div>
      </main>
    </>
  );
}

