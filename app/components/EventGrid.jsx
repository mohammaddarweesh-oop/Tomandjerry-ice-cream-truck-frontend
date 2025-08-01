import Link from "next/link";

const events = [
  { name: "Birthday Parties", path: "/events/birthday-parties", bg: "#da8ec0" },
  { name: "Block Parties", path: "/events/block-parties", bg: "#eeafc5" },
  {
    name: "Corporate Parties",
    path: "/events/corporate-parties",
    bg: "#f7ccd1",
  },
  { name: "Fundraisers", path: "/events/fundraisers", bg: "#6acbde" },
  { name: "Launch Parties", path: "/events/launch-parties", bg: "#a3dee8" },
  { name: "Marketing Events", path: "/events/marketing-events", bg: "#f2e9d3" },
  { name: "Movie Rental", path: "/events/movie-rental", bg: "#da8ec0" },
  { name: "Photo Shoots", path: "/events/photo-shoots", bg: "#eeafc5" },
  { name: "Reunions", path: "/events/reunions", bg: "#f7ccd1" },
  { name: "School Events", path: "/events/school-events", bg: "#6acbde" },
  { name: "Sporting Events", path: "/events/sporting-events", bg: "#a3dee8" },
  {
    name: "Wedding Receptions",
    path: "/events/wedding-receptions",
    bg: "#f2e9d3",
  },
  { name: "Event Catering", path: "/events/event-catering", bg: "#ffc9de" },
];

export default function EventGrid() {
  return (
    <section className="py-10 px-4 bg-white ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {events.map((event) => (
          <Link
            key={event.path}
            href={event.path}
            className="group rounded-lg shadow-lg p-6 flex justify-between items-center transition-transform hover:scale-105"
            style={{ backgroundColor: event.bg }}
          >
            <div className=" text-lg font-semibold text-gray-800">
              {event.name}
            </div>
            <img
              src="https://cdn.prod.website-files.com/66d451b36f58536866e1187f/66da33f2bf573bc5e77355b6_round-arrow.png"
              alt="arrow"
              width={40}
              height={40}
              loading="lazy"
              className="transform transition-transform duration-300 group-hover:translate-x-2"
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
