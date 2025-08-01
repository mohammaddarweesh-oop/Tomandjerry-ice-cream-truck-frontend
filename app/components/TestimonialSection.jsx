// "use client";
// import Image from "next/image";

// export default function TestimonialSection() {
//   return (
//     <section className="bg-pink-50 py-16 px-4">
//       <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
//         {/* Left: spinning background with person image */}
//         <div className="relative w-full md:w-1/2 flex justify-center items-center">
//           {/* Rotating background - مصغرة */}
//           <div className="absolute w-[280px] h-[280px] md:w-[360px] md:h-[360px] rounded-full overflow-hidden z-0 custom-spin">
//             <Image
//               src="https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66daa6a98967634c6a22c244_kals-ice-cream-truck-testimonial-bg.avif"
//               alt="Rotating background"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Person Image - مصغرة */}
//           <div className="relative w-[240px] h-[240px] md:w-[320px] md:h-[320px] rounded-full z-10 overflow-hidden shadow-lg border-4 border-white">
//             <Image
//               src="https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66daa6a1f6f1bf615fb9b63d_kals-ice-cream-truck-testimonial-pic.avif"
//               alt="Testimonial person"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>

//         {/* Right: Text */}
//         <div className="md:w-1/2 text-center md:text-left">
//           <h2 className="text-3xl font-extrabold text-pink-600 mb-6 font-berkshire text-shadow-lg ">
//             Hear From Our <span className="text-blue-600">Happy Customers</span>
//           </h2>
//           <div className="space-y-6">
//             {[
//               {
//                 quote: `"The beginning of a beautiful friendship"`,
//                 name: "Ryan Washington",
//               },
//               { quote: `"Best ice cream in town"`, name: "Mark Goodwin" },
//               { quote: `"Totally recommended!"`, name: "Brittany Andrews" },
//             ].map(({ quote, name }) => (
//               <div
//                 key={name}
//                 className="bg-white rounded-lg shadow p-4 border-l-4 border-pink-400"
//               >
//                 <p className="italic text-gray-700">{quote}</p>
//                 <p className="text-sm font-semibold text-gray-800 mt-2">
//                   — {name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* CSS for rotation */}
//       <style jsx>{`
//         .custom-spin {
//           animation: spin 20s linear infinite;
//         }

//         @keyframes spin {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";
import Image from "next/image";

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "The ice cream was a hit at our company picnic! The service was fantastic and everyone left happy.",
      name: "Ryan Washington",
      title: "Event Organizer",
      image:
        "https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66daa6a1f6f1bf615fb9b63d_kals-ice-cream-truck-testimonial-pic.avif",
    },
    {
      quote:
        "Best ice cream truck in Boston! Showed up on time and made our birthday party unforgettable.",
      name: "Mark Goodwin",
      title: "Parent",
      image:
        "https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66daa6a1f6f1bf615fb9b63d_kals-ice-cream-truck-testimonial-pic.avif",
    },
    {
      quote:
        "Super friendly team, delicious ice cream, and beautiful truck! Highly recommend for any event.",
      name: "Brittany Andrews",
      title: "Photographer",
      image:
        "https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66daa6a1f6f1bf615fb9b63d_kals-ice-cream-truck-testimonial-pic.avif",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 font-berkshire text-pink-600">
          What People Are Saying
        </h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Real stories from real celebrations. Here’s what our customers have to say.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(({ quote, name, title, image }, i) => (
            <div
              key={i}
              className="bg-pink-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 relative rounded-full overflow-hidden border-2 border-white shadow">
                  <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="ml-4 text-left">
                  <h4 className="text-lg font-semibold text-gray-800">
                    {name}
                  </h4>
                  <span className="text-sm text-gray-500">{title}</span>
                </div>
              </div>
              <p className="text-gray-700 italic">“{quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
