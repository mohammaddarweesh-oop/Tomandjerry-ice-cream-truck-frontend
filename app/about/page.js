import Image from "next/image";
import Link from "next/link";
import ContactCards from "../components/ContactCards";
import EventGrid from "../components/EventGrid";
import BookingSection from "../components/BookingSection";

export const metadata = {
  title: "About Speed Ice Cream | Boston's Favorite Ice Cream Truck",
  description:
    "Learn about Speed Ice Cream, Boston’s beloved ice cream truck serving joy and delicious flavors across the greater Boston area.",
  keywords: [
    "Speed Ice Cream",
    "Boston Ice Cream Truck",
    "About Ice Cream Catering",
    "Event Ice Cream",
  ],
  authors: [
    { name: "Speed Team", url: "https://speedicecreamtruck.com" },
  ],
  metadataBase: new URL("https://speedicecreamtruck.com"),
  openGraph: {
    title: "About Speed Ice Cream",
    description:
      "Discover the story behind Boston’s favorite ice cream truck, serving smiles one scoop at a time.",
    url: "https://speedicecreamtruck.com/about",
    siteName: "TomandJerry Ice Cream",
    images: [
      {
        url: "/og-image-about.jpg",
        width: 1200,
        height: 630,
        alt: "TomandJerry Ice Cream Truck",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Speed Ice Cream",
    description:
      "Learn about Speed Ice Cream, spreading joy across Boston with every scoop.",
    images: ["/og-image-about.jpg"],
    site: "@TomandJerryIce",
  },
};

export default function AboutPage() {
  return (
    <>
      <main className="pt-24 min-h-screen bg-gradient-to-b from-pink-100 via-pink-50 to-white px-6 pb-16 font-poppins text-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/ice-cream-truck.jpg"
                width={800}
                height={500}
                alt="TomandJerry Ice Cream Truck"
                className="w-full h-auto object-cover rounded-3xl"
                loading="lazy"
                placeholder="blur"
                blurDataURL="/placeholder-ice-cream-truck.jpg"
              />
              <p className="text-sm text-gray-500 mt-2 text-center italic">
                Serving smiles across Boston and beyond!
              </p>
            </div>

            {/* Text Section */}
            <div>
              <h1 className="text-5xl font-extrabold text-pink-600 mb-6 leading-tight drop-shadow-sm">
                About <span className="text-gray-800">Speed Ice Cream</span>
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed mb-5">
                Welcome to TomandJerry Ice Cream — a Lynnfield, MA-based sensation bringing joy one scoop at a time across the greater Boston area. Whether you're in the North Shore, Metro West, or Southern New Hampshire, our whimsical truck is just around the corner.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                From birthday parties to corporate events, our team delivers more than just premium ice cream — we bring vibrant energy, friendly service, and sweet memories that last. 
              </p>
              <Link
                href="/booking"
                className="inline-block bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full text-lg font-semibold shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                Book Us Today
              </Link>
            </div>
          </div>
        </div>
      </main>
      <BookingSection />
      <EventGrid />
      <ContactCards />
    </>
  );
}
