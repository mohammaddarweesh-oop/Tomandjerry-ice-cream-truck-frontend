// "use client";

// import Link from "next/link";

// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-br from-pink-600 to-blue-700 text-white py-10 shadow-inner ">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             TomandJerry ice cream
//             <p className="text-lg font-bold">
//               Ice cream <span className="text-purple-300">Truck</span>
//             </p>
//             <div className="flex gap-4 mt-4">
//               <a
//                 href="https://www.facebook.com/KalsIceCream/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src="https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66daa6baca258aa5b1b6a221_kals-ice-cream-truck-facebook.png"
//                   alt="Facebook"
//                   className="w-6 h-6"
//                 />
//               </a>
//               <a
//                 href="https://www.tiktok.com/@kalsicecream"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src="https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66daa6ba212c9396d1331e2b_kals-ice-cream-truck-tiktok.png"
//                   alt="TikTok"
//                   className="w-6 h-6"
//                 />
//               </a>
//               <a
//                 href="https://www.instagram.com/kalsicecream/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <img
//                   src="https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66daa6ba2a291f82a1f963bd_kals-ice-cream-truck-instagram.png"
//                   alt="Instagram"
//                   className="w-6 h-6"
//                 />
//               </a>
//             </div>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-3">Event Catering</h4>
//             <ul className="space-y-1 text-sm">
//               {[
//                 "Event Catering",
//                 "Birthday Parties",
//                 "Block Parties",
//                 "Corporate Parties",
//                 "Fundraisers",
//                 "Launch Parties",
//                 "Marketing Events",
//                 "Movie Rental",
//                 "Photo Shoots",
//                 "Reunions",
//                 "School Events",
//                 "Sporting Events",
//                 "Wedding Receptions",
//               ].map((event) => {
//                 const slug = event.toLowerCase().replace(/\s+/g, "-");
//                 return (
//                   <li
//                     key={event}
//                     className="hover:text-pink-200 cursor-pointer"
//                   >
//                     <Link href={`/events/${slug}`}>{event}</Link>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-3">Navigation</h4>
//             <ul className="space-y-1 text-sm">
//               {[
//                 { label: "Home", href: "/" },
//                 { label: "About", href: "/about" },
//                 { label: "Products", href: "/products" },
//                 { label: "Contact Us", href: "/contactus" },
//                 { label: "Blog", href: "/blogs" },
//                 {
//                   label: "Reserve our trucks",
//                   href: "/reserve-TomandJerry-ice-cream-ice-cream-trucks-for-your-event",
//                 },
//               ].map(({ label, href }) => (
//                 <li key={label}>
//                   <Link href={href} className="hover:text-pink-200">
//                     {label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h4 className="text-lg font-semibold mb-3">Hours</h4>
//             <p className="text-sm">Mon-Fri: 8:00AM - 10:00PM</p>
//             <p className="text-sm">Sat-Sun: 9:00AM - 10:00PM</p>
//             <h4 className="text-lg font-semibold mt-6 mb-2">Call Us</h4>
//             <p className="text-sm">458.265.9579</p>
//           </div>
//         </div>
//         <div className="text-center text-xs mt-10 text-white/80">
//           TomandJerry ice cream Copyright © {new Date().getFullYear()}, All
//           rights reserved.
//           <br />
//           <a
//             href="https://www.dvyns.com/"
//             rel="nofollow"
//             target="_blank"
//             className="underline text-blue-200 hover:text-white"
//           >
//             Powered by <span className="font-semibold">DVYNS</span>
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }


"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-pink-600 to-blue-700 text-white py-12 shadow-inner">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Social */}
          <div>
            <h3 className="text-xl font-bold tracking-tight">
              TomandJerry Ice Cream
            </h3>
            <p className="text-lg">
              Ice cream <span className="text-purple-300">Truck</span>
            </p>
            <ul className="flex gap-4 mt-4">
              {[
                {
                  href: "https://www.facebook.com/KalsIceCream/",
                  src: "https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66daa6baca258aa5b1b6a221_kals-ice-cream-truck-facebook.png",
                  alt: "Facebook",
                },
                {
                  href: "https://www.tiktok.com/@kalsicecream",
                  src: "https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66daa6ba212c9396d1331e2b_kals-ice-cream-truck-tiktok.png",
                  alt: "TikTok",
                },
                {
                  href: "https://www.instagram.com/kalsicecream/",
                  src: "https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66daa6ba2a291f82a1f963bd_kals-ice-cream-truck-instagram.png",
                  alt: "Instagram",
                },
              ].map(({ href, src, alt }) => (
                <li key={alt}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Image src={src} alt={alt} width={24} height={24} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Event Catering</h4>
            <ul className="space-y-1 text-sm">
              {[
                "Event Catering",
                "Birthday Parties",
                "Block Parties",
                "Corporate Parties",
                "Fundraisers",
                "Launch Parties",
                "Marketing Events",
                "Movie Rental",
                "Photo Shoots",
                "Reunions",
                "School Events",
                "Sporting Events",
                "Wedding Receptions",
              ].map((event) => {
                const slug = event.toLowerCase().replace(/\s+/g, "-");
                return (
                  <li key={event}>
                    <Link
                      href={`/events/${slug}`}
                      className="hover:text-pink-200"
                    >
                      {event}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Navigation</h4>
            <ul className="space-y-1 text-sm">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Products", href: "/products" },
                { label: "Contact Us", href: "/contactus" },
                { label: "Blog", href: "/blogs" },
                {
                  label: "Reserve our trucks",
                  href: "/reserve-TomandJerry-ice-cream-ice-cream-trucks-for-your-event",
                },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-pink-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3">Hours</h4>
            <p className="text-sm">Mon–Fri: 8:00AM – 10:00PM</p>
            <p className="text-sm">Sat–Sun: 9:00AM – 10:00PM</p>
            <h4 className="text-lg font-semibold mt-6 mb-2">Call Us</h4>
            <p className="text-sm">458.265.9579</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-xs mt-10 text-white/80">
          © {new Date().getFullYear()} TomandJerry Ice Cream. All rights reserved.
          <br />
          <a
            href="https://www.dvyns.com/"
            rel="nofollow"
            target="_blank"
            className="underline text-blue-200 hover:text-white font-medium"
          >
            Powered by <span className="font-semibold">DVYNS</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
