import Image from "next/image";
import Link from "next/link";
import ContactCards from "./components/ContactCards";
import { notFound } from "next/navigation";
import AreasWeServe from "./components/AreasWeServe";
import EventGrid from "./components/EventGrid";
import BookingSection from "./components/BookingSection";
import SpecialOffersSlider from "./components/OffersSlider";

export const metadata = {
  title: "TomandJerry Ice Cream | Boston's Favorite Ice Cream Truck",
  description:
    "Book the TomandJerry Ice Cream Truck for your event in Boston. We serve happiness with every scoop of our delicious handcrafted flavors.",
  keywords: [
    "TomandJerry Ice Cream",
    "soft serve ice cream Boston",
    "buy ice cream near me",
    "Boston Ice Cream Truck",
    "Ice Cream Catering",
    "Book Ice Cream Truck",
    "Event Ice Cream",
  ],
  authors: [
    { name: "TomandJerry Team", url: "https://tomandjerryicecream.com" },
  ],
  metadataBase: new URL("https://tomandjerryicecream.com"),
  openGraph: {
    title: "TomandJerry Ice Cream | Boston Events",
    description:
      "Boston’s most loved ice cream truck for events, weddings, and birthdays.",
    url: "https://tomandjerryicecream.com",
    siteName: "TomandJerry Ice Cream",
    images: [
      {
        url: "/og-image.jpg",
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
    title: "TomandJerry Ice Cream",
    description:
      "Book Boston’s favorite ice cream truck and spread joy at your event.",
    images: ["/og-image.jpg"],
    site: "@TomandJerryIce",
  },
};

const API_BASE = process.env.API_BASE || "http://localhost:4000";

async function getProducts() {
  try {
    const res = await fetch(`${API_BASE}/api/products`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default async function Home() {
  const products = await getProducts();

  if (!products || products.length === 0) return notFound();

  return (
    <main className="pt-16 bg-white min-h-screen font-sans text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[95vh] overflow-hidden ">
        <Image
          src="/hero2.jpg"
          alt="Delicious ice cream"
          layout="fill"
          objectFit="cover"
          quality={80}
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="p-6 rounded-lg backdrop-blur-md text-center max-w-lg text-white">
            <h2 className="font-berkshire text-shadow-lg text-4xl font-bold mb-4">
              Spreading Joy with Delicious Ice Cream Flavors
            </h2>
            <p className="mb-6">
              Discover our tastiest flavors and book our ice cream truck for
              your event today!
            </p>
            <Link
              href="/booking"
              className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white">
        <h3
          className="text-4xl md:text-5xl font-bold text-pink-600 mb-10 text-center font-berkshire text-shadow-lg"
          style={{ fontFamily: "Berkshire Swash, cursive" }}
        >
          Our Products
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <article
              key={product._id}
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)] transition duration-300 ease-in-out p-2"
            >
              <div className="relative w-full h-52 rounded-xl overflow-hidden">
                <Image
                  src={`${API_BASE}${product.image.startsWith("/") ? "" : "/"}${
                    product.image
                  }`}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="w-full h-48 object-cover rounded-2xl mb-4"
                  priority={false}
                />
              </div>

              <div className="mt-1 p-2">
                <h4 className="text-lg font-bold text-gray-800">
                  {product.title}
                </h4>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {product.description}
                </p>

                <p className="font-semibold mt-2">Size: {product.size}</p>
                <p className="text-pink-600 font-semibold mt-2">
                  {product.price} $
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Waves SVG */}
      <div className="w-full overflow-hidden -mt-1">
        <svg
          id="wave"
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[100px] rotate-0 transition-all duration-300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="#fdf2f8" offset="0%" />
              <stop stopColor="#fdf2f8" offset="100%" />
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,96L60,85.3C120,75,240,53,360,56C480,59,600,85,720,96C840,107,960,101,1080,85.3C1200,69,1320,43,1440,50.7C1560,59,1680,101,1800,117.3C1920,133,2040,123,2160,114.7C2280,107,2400,101,2520,101.3C2640,101,2760,107,2880,98.7C3000,91,3120,69,3240,64C3360,59,3480,69,3600,69.3C3720,69,3840,59,3960,48C4080,37,4200,27,4320,42.7C4440,59,4560,101,4680,98.7C4800,96,4920,48,5040,29.3C5160,11,5280,21,5400,45.3C5520,69,5640,107,5760,112C5880,117,6000,91,6120,82.7C6240,75,6360,85,6480,85.3C6600,85,6720,75,6840,64C6960,53,7080,43,7200,48C7320,53,7440,75,7560,88C7680,101,7800,107,7920,114.7C8040,123,8160,133,8280,138.7C8400,144,8520,144,8580,144L8640,144L8640,160L0,160Z"
          />
        </svg>
      </div>

      <SpecialOffersSlider />
      <BookingSection />

      <div className="w-full overflow-hidden -mb-1">
        <svg
          id="wave"
          viewBox="0 0 1440 160"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[100px] rotate-180 transition-all duration-300"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(253, 242, 248, 1)" offset="0%" />
              <stop stopColor="rgba(253, 242, 248, 1)" offset="100%" />
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,96L60,85.3C120,75,240,53,360,56C480,59,600,85,720,96C840,107,960,101,1080,85.3C1200,69,1320,43,1440,50.7C1560,59,1680,101,1800,117.3C1920,133,2040,123,2160,114.7C2280,107,2400,101,2520,101.3C2640,101,2760,107,2880,98.7C3000,91,3120,69,3240,64C3360,59,3480,69,3600,69.3C3720,69,3840,59,3960,48C4080,37,4200,27,4320,42.7C4440,59,4560,101,4680,98.7C4800,96,4920,48,5040,29.3C5160,11,5280,21,5400,45.3C5520,69,5640,107,5760,112C5880,117,6000,91,6120,82.7C6240,75,6360,85,6480,85.3C6600,85,6720,75,6840,64C6960,53,7080,43,7200,48C7320,53,7440,75,7560,88C7680,101,7800,107,7920,114.7C8040,123,8160,133,8280,138.7C8400,144,8520,144,8580,144L8640,144L8640,160L0,160Z"
          />
        </svg>
      </div>

      <EventGrid />
      <ContactCards />
      <AreasWeServe />
    </main>
  );
}
