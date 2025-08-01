"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:4000/api/admin/login",
        { email, password },
        { withCredentials: true }
      );

      if (res.data.message === "Login successful") {
        router.push("/admin/dashboard");
      } else {
        setError("Login failed");
      }
    } catch (err) {
      setError("Invalid login credentials");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-blue-100">
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 shadow-2xl rounded-xl overflow-hidden">
        {/* Left Side: Image (Visible only on md and up) */}
        <div
          className="hidden md:block bg-cover bg-center"
          style={{
            backgroundImage: `url("https://cdn.pixabay.com/photo/2020/05/01/08/42/ice-cream-5119729_1280.jpg")`,
          }}
        ></div>

        {/* Right Side: Login Form */}
        <div className="backdrop-blur-xl bg-white/70 p-8 md:p-12">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
            Admin Login
          </h1>

          {error && (
            <p className="text-sm text-red-600 bg-red-100 p-2 rounded mb-4 text-center">
              {error}
            </p>
          )}

          <form onSubmit={handleLogin} className="space-y-5 text-black">
            <div>
              <label className="block text-gray-700 mb-1 text-sm">Email</label>
              <input
                type="email"
                placeholder="admin@icecream.com"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-1 text-sm">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-500 outline-none"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-lg font-semibold transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
