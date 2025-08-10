// import Image from "next/image";
// import Link from "next/link";
// import { notFound } from "next/navigation";
// import { Suspense, lazy } from "react";
// import AreasWeServe from "../components/AreasWeServe";

// const ContactCards = lazy(() => import("../components/ContactCards"));
// const IntroSection = lazy(() => import("../components/IntroSection"));
// const CallToActionSection = lazy(() =>
//   import("../components/CallToActionSection")
// );

// const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "http://localhost:4000";

// export const metadata = {
//   title: "TomandJerry Ice Cream | Boston's Favorite Ice Cream Truck",
//   description:
//     "Book the TomandJerry Ice Cream Truck for your event in Boston. We serve happiness with every scoop of our delicious handcrafted flavors.",
//   keywords: [
//     "TomandJerry Ice Cream",
//     "Boston Ice Cream Truck",
//     "Ice Cream Catering",
//     "Book Ice Cream Truck",
//     "Event Ice Cream",
//   ],
//   authors: [
//     { name: "TomandJerry Team", url: "https://tomandjerryicecream.com" },
//   ],
//   metadataBase: new URL("https://tomandjerryicecream.com"),
//   openGraph: {
//     title: "TomandJerry Ice Cream | Boston Events",
//     description:
//       "Boston’s most loved ice cream truck for events, weddings, and birthdays.",
//     url: "https://tomandjerryicecream.com",
//     siteName: "TomandJerry Ice Cream",
//     images: [
//       {
//         url: "/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "TomandJerry Ice Cream Truck",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "TomandJerry Ice Cream",
//     description:
//       "Book Boston’s favorite ice cream truck and spread joy at your event.",
//     images: ["/og-image.jpg"],
//     site: "@TomandJerryIce",
//   },
// };

// async function getProducts() {
//   try {
//     const res = await fetch(`${API_BASE}/api/products`);

//     if (!res.ok) throw new Error("Failed to fetch");

//     return res.json();
//   } catch (error) {
//     console.error("Error fetching products:", error);
//     return [];
//   }
// }

// export default async function Home() {
//   const products = await getProducts();

//   if (!products) return notFound();

//   return (
//     <main className="pt-16 bg-pink-50 min-h-screen font-sans text-gray-800">
//       <section className="relative h-[95vh] overflow-hidden">
//         <Image
//           src="/hero.webp"
//           alt="Delicious ice cream"
//           fill
//           style={{ objectFit: "cover" }}
//           quality={65}
//           priority
//         />
//         <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
//           <div className="p-6 rounded-lg backdrop-blur-md text-center max-w-lg text-white">
//             <h2 className="text-4xl font-bold mb-4">
//               Spreading Joy with Delicious Ice Cream Flavors
//             </h2>
//             <p className="mb-6">
//               Discover our tastiest flavors and book our ice cream truck for
//               your event today!
//             </p>
//             <Link
//               href="/booking"
//               className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-full transition"
//             >
//               Book Now
//             </Link>
//           </div>
//         </div>
//       </section>
//       <Suspense
//         fallback={<div className="text-center py-10">Loading intro...</div>}
//       >
//         <IntroSection />
//       </Suspense>
//       <section className="py-12 px-6 max-w-7xl mx-auto">
//         <h3 className="text-3xl font-bold text-center mb-10 text-pink-700 font-['Poppins']">
//           Our Products
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition"
//             >
//               <div className="relative w-full h-48">
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   fill
//                   style={{ objectFit: "cover" }}
//                   quality={50}
//                   className="rounded-lg"
//                   loading="lazy"
//                 />
//               </div>
//               <h4 className="text-xl font-semibold mt-4">{product.title}</h4>
//               <p className="text-sm text-gray-600 mt-1">
//                 {product.description}
//               </p>
//               <p className="text-pink-700 font-bold mt-2">
//                 {product.price} JOD - {product.size}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Suspense
//         fallback={
//           <div className="text-center py-10">Loading contact info...</div>
//         }
//       >
//         <ContactCards />
//       </Suspense>

//       <Suspense
//         fallback={
//           <div className="text-center py-10">Loading call to action...</div>
//         }
//       >
//         <CallToActionSection />
//       </Suspense>
//       <AreasWeServe />
//     </main>
//   );
// }


 export default function Home() {

  return (
    <div>
      <h1>Home</h1>
    </div>
  )
 }