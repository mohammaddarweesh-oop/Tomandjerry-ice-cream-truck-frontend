// "use client";
// export default function EventsSection() {
//   const events = [
//     {
//       name: "Birthday Parties",
//       href: "/events/birthday-parties",
//       bgColor: "bg-[#da8ec0]",
//     },
//     {
//       name: "Block Parties",
//       href: "/events/block-parties",
//       bgColor: "bg-[#eeafc5]",
//     },
//     {
//       name: "Corporate Parties",
//       href: "/events/corporate-parties",
//       bgColor: "bg-[#f7ccd1]",
//     },
//     {
//       name: "Fundraisers",
//       href: "/events/fundraisers",
//       bgColor: "bg-[#6acbde]",
//     },
//     {
//       name: "Launch Parties",
//       href: "/events/launch-parties",
//       bgColor: "bg-[#a3dee8]",
//     },
//     {
//       name: "Marketing Events",
//       href: "/events/marketing-events",
//       bgColor: "bg-[#f2e9d3]",
//     },
//     {
//       name: "Movie Rental",
//       href: "/events/movie-rental",
//       bgColor: "bg-[#da8ec0]",
//     },
//     {
//       name: "Photo Shoots",
//       href: "/events/photo-shoots",
//       bgColor: "bg-[#eeafc5]",
//     },
//     { name: "Reunions", href: "/events/reunions", bgColor: "bg-[#f7ccd1]" },
//     {
//       name: "School Events",
//       href: "/events/school-events",
//       bgColor: "bg-[#6acbde]",
//     },
//     {
//       name: "Sporting Events",
//       href: "/events/sporting-events",
//       bgColor: "bg-[#a3dee8]",
//     },
//     {
//       name: "Wedding Receptions",
//       href: "/events/wedding-receptions",
//       bgColor: "bg-[#f2e9d3]",
//     },
//   ];

//   return (
//     <section className="w-full bg-white px-4 pt-[100px] overflow-hidden">
//       <div className="flex flex-wrap md:flex-nowrap gap-8 md:gap-12 items-center max-w-[1400px] mx-auto">
//         <div className="flex-1 min-w-[250px]">
//           <h1 className="text-4xl font-extrabold mb-3 font-berkshire text-shadow-lg">
//             TomandJerry <span className="text-pink-500">Ice Cream</span> Makes
//             Every <span className="text-pink-500">Celebration</span> Moment A
//             Special Moment
//           </h1>
//           <p className="text-lg text-gray-700">
//             We cater to all types of events, big or small!
//           </p>
//         </div>

//         <div className="flex flex-col gap-6 md:gap-10 flex-1 min-w-[250px]">
//           {/* Two images side by side */}
//           <div className="flex justify-center gap-6 ">
//             <img
//               src="https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66dfd6b6d4811fc76757a394_kals-ice-cream-truck-event-catering-services.avif"
//               alt="TomandJerry ice cream event catering service"
//               loading="lazy"
//               width={306}
//               height={368}
//               className="rounded-lg rotate-left object-cover max-w-full shadow-[0_20px_30px_-10px_rgba(0,0,0,0.3)]"
//             />
//             <img
//               src="https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66dfd6b60c4a5737031f8fa3_kals-ice-cream-event-catering-services.avif"
//               alt="TomandJerry ice cream truck event catering services"
//               loading="lazy"
//               width={306}
//               height={368}
//               className="rounded-lg rotate-right object-cover max-w-full shadow-[0_20px_30px_-10px_rgba(0,0,0,0.3)]"
//             />
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .rotate-left {
//           transform: rotate(-5deg);
//         }
//         .rotate-right {
//           transform: rotate(5deg);
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";
import Link from "next/link";

export default function EventsSection() {
  const events = [
    { name: "Birthday Parties", href: "/events/birthday-parties", bgColor: "bg-[#da8ec0]" },
    { name: "Block Parties", href: "/events/block-parties", bgColor: "bg-[#eeafc5]" },
    { name: "Corporate Parties", href: "/events/corporate-parties", bgColor: "bg-[#f7ccd1]" },
    { name: "Fundraisers", href: "/events/fundraisers", bgColor: "bg-[#6acbde]" },
    { name: "Launch Parties", href: "/events/launch-parties", bgColor: "bg-[#a3dee8]" },
    { name: "Marketing Events", href: "/events/marketing-events", bgColor: "bg-[#f2e9d3]" },
    { name: "Movie Rental", href: "/events/movie-rental", bgColor: "bg-[#da8ec0]" },
    { name: "Photo Shoots", href: "/events/photo-shoots", bgColor: "bg-[#eeafc5]" },
    { name: "Reunions", href: "/events/reunions", bgColor: "bg-[#f7ccd1]" },
    { name: "School Events", href: "/events/school-events", bgColor: "bg-[#6acbde]" },
    { name: "Sporting Events", href: "/events/sporting-events", bgColor: "bg-[#a3dee8]" },
    { name: "Wedding Receptions", href: "/events/wedding-receptions", bgColor: "bg-[#f2e9d3]" },
  ];

  return (
    <section className="w-full bg-gradient-to-br from-pink-50 via-white to-pink-100 px-4 py-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Text & Title */}
        <div>
          <h1 className="text-5xl font-berkshire font-bold text-pink-600 leading-tight drop-shadow-sm mb-4">
            Turn every occasion into a  <span className="text-pink-400">delightful memory</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-xl leading-relaxed font-[Poppins]">
            From birthdays and family gatherings to corporate events, our ice cream truck brings joy, flavor, and fun to every celebration.
          </p>

          {/* Events Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {events.map((event) => (
              <Link
                key={event.name}
                href={event.href}
                className={`rounded-xl px-4 py-3 text-sm text-gray-800 font-semibold shadow hover:shadow-lg hover:scale-[1.02] transition-transform duration-200 ${event.bgColor}`}
              >
                {event.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Images */}
        <div className="flex justify-center gap-6 relative">
          <img
            src="https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66dfd6b6d4811fc76757a394_kals-ice-cream-truck-event-catering-services.avif"
            alt="Ice Cream Truck"
            className="w-[280px] sm:w-[300px] rounded-2xl shadow-xl rotate-[-6deg] hover:rotate-[-3deg] transition-all duration-300"
          />
          <img
            src="https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66dfd6b60c4a5737031f8fa3_kals-ice-cream-event-catering-services.avif"
            alt="Event Catering"
            className="w-[280px] sm:w-[300px] rounded-2xl shadow-xl rotate-[6deg] hover:rotate-[3deg] transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
}
