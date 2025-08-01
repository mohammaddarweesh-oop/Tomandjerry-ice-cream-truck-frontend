"use client";

import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "Why Ice Cream Trucks Are the Ultimate Party Hit in 2025",
    slug: "ice-cream-truck-party-hit-2025",
    description:
      "Discover how mobile ice cream catering makes birthdays, weddings, and school events unforgettable with fresh flavors and joyful vibes.",
    image: "/images/blogs/ice-cream-party.jpg",
    date: "July 10, 2025",
  },
  {
    id: 2,
    title: "Top 5 Reasons to Book an Ice Cream Truck for Your Next Event",
    slug: "book-ice-cream-truck-event-benefits",
    description:
      "Boost your event engagement with a nostalgic and fun dessert experience. Ice cream trucks are ideal for corporate gatherings, festivals, and kids’ birthdays.",
    image: "/images/blogs/why-book-icecream.jpg",
    date: "June 28, 2025",
  },
  {
    id: 3,
    title: "How We Make Fresh Ice Cream On the Go",
    slug: "fresh-ice-cream-on-the-go",
    description:
      "Learn about our premium mobile setup that delivers freshly made ice cream right to your location—anywhere in Boston and surrounding areas.",
    image: "/images/blogs/fresh-icecream.jpg",
    date: "June 12, 2025",
  },
];

export default function BlogsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Latest Blogs About Ice Cream & Event Catering
        </h2>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <a
              key={blog.id}
              href={`/blogs/${blog.slug}`}
              className="rounded-2xl shadow hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="relative w-full h-56">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <p className="text-xs text-gray-500 mb-2">{blog.date}</p>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
