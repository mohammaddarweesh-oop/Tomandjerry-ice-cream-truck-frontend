"use client";

import Image from "next/image";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Why Bostonians Are Booking Ice Cream Trucks for Every Occasion",
    excerpt:
      "Looking for a unique and refreshing way to impress your guests? Our mobile ice cream truck offers gourmet treats and unforgettable experiences.",
    image: "/images/blogs/blog1.avif",
    slug: "boston-ice-cream-truck-summer-party",
  },
  {
    id: 2,
    title: "Boston’s Coolest Ice Cream Experience on Wheels",
    excerpt:
      "From birthday parties to corporate events, here’s why renting a dessert catering truck makes all the difference.",
    image: "/images/blogs/blog2.png",
    slug: "ice-cream-truck-event-benefits",
  },
  {
    id: 3,
    title: "Behind the Scoop: The Story of Boston’s Favorite Ice Cream Truck",
    excerpt:
      "We don’t just serve ice cream, we deliver moments of joy. Discover how our truck enhances weddings, school events, and more.",
    image: "/images/blogs/blog3.jpg",
    slug: "mobile-dessert-catering-joy",
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 px-4 bg-pink-50 text-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-berkshire text-shadow-lg text-3xl font-bold text-center text-gray-800 mb-10">
          From the Blog: Sweet Reads for Ice Cream Lovers
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-white shadow-xl rounded-2xl overflow-hidden transition transform hover:-translate-y-1 hover:shadow-2xl p-2"
            >
              <div className=" rounded-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="p-5">
                <h3 className="font-berkshire text-shadow-lg text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                <Link
                  href={`/blogs/${post.slug}`}
                  className="text-pink-600 hover:underline text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
