

"use client";

import Link from "next/link";
import { useState, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

export default function Navbar() {
  const [open, setOpen] = useState(false); // Dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu
  const timeoutRef = useRef(null);

  const events = [
    { name: "Event Catering", path: "/events/event-catering" },
    { name: "Birthday Parties", path: "/events/birthday-parties" },
    { name: "Block Parties", path: "/events/block-parties" },
    { name: "Corporate Parties", path: "/events/corporate-parties" },
    { name: "Fundraisers", path: "/events/fundraisers" },
    { name: "Launch Parties", path: "/events/launch-parties" },
    { name: "Marketing Events", path: "/events/marketing-events" },
    { name: "Movie Rental", path: "/events/movie-rental" },
    { name: "Photo Shoots", path: "/events/photo-shoots" },
    { name: "Reunions", path: "/events/reunions" },
    { name: "School Events", path: "/events/school-events" },
    { name: "Sporting Events", path: "/events/sporting-events" },
    { name: "Wedding Receptions", path: "/events/wedding-receptions" },
  ];

  const openDropdown = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  }, []);

  const closeDropdown = useCallback(() => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  }, []);

  return (
    <nav className="font-['Poppins'] fixed top-0 w-full z-50 bg-white/20 backdrop-blur shadow-md px-6 py-4 flex justify-between items-center">
      <Link href="/">
        <h1 className="text-2xl font-bold text-pink-600 font-berkshire">
          TomandJerry ice cream
        </h1>
      </Link>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center space-x-4">
        <Link href="/" className="text-black hover:text-pink-500">Home</Link>
        <Link href="/booking" className="text-black hover:text-pink-500">Booking</Link>
        <Link href="/admin/dashboard" className="text-black hover:text-pink-500">Admin</Link>
        <Link href="/rentcharacters" className="text-black hover:text-pink-500">Rent Characters</Link>

        <div
          className="relative"
          onMouseEnter={openDropdown}
          onMouseLeave={closeDropdown}
        >
          <button className="text-black hover:text-pink-500">Our Services</button>
          {open && (
            <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md z-50 max-h-[400px] overflow-auto">
              {events.map(({ name, path }) => (
                <Link
                  key={path}
                  href={path}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-100"
                  onClick={() => setOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          )}
        </div>

        <Link href="/about" className="text-black hover:text-pink-500">About Us</Link>
        <Link href="/contactus" className="text-black hover:text-pink-500">Contact Us</Link>
      </div>

      {/* Mobile menu button */}
      <button className="md:hidden text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-lg px-6 py-4 flex flex-col space-y-4 z-40 md:hidden">
          <Link href="/" className="text-black hover:text-pink-500" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/booking" className="text-black hover:text-pink-500" onClick={() => setMobileMenuOpen(false)}>Booking</Link>
          <Link href="/admin/dashboard" className="text-black hover:text-pink-500" onClick={() => setMobileMenuOpen(false)}>Admin</Link>

          <details className="text-black">
            <summary className="cursor-pointer hover:text-pink-500">Our Services</summary>
            <div className="ml-4 mt-2 space-y-2">
              {events.map(({ name, path }) => (
                <Link
                  key={path}
                  href={path}
                  className="block text-sm text-gray-700 hover:text-pink-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {name}
                </Link>
              ))}
            </div>
          </details>

          <Link href="/rentcharacters" className="text-black hover:text-pink-500" onClick={() => setMobileMenuOpen(false)}>Rent Characters</Link>
          <Link href="/about" className="text-black hover:text-pink-500" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link href="/contactus" className="text-black hover:text-pink-500" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
        </div>
      )}
    </nav>
  );
}
