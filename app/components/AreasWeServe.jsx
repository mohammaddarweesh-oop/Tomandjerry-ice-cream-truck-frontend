import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function AreasWeServe() {
  const cities = [
    "Abington",
    "Allston",
    "Andover",
    "Arlington",
    "Avon",
    "Barnstable",
    "Bedford",
    "Belmont",
    "Billerica",
    "Boston",
    "Braintree",
    "Bridgewater",
    "Brighton",
    "Brookline",
    "Burlington",
    "Cambridge",
    "Cape Cod",
    "Charlestown",
    "Chelsea",
    "Concord",
    "Dedham",
    "Dorchester",
    "Everett",
    "Framingham",
    "Lexington",
    "Lowell",
    "Lynn",
    "Malden",
    "Medford",
    "Milton",
    "Needham",
    "Newton",
    "Peabody",
    "Plymouth",
    "Quincy",
    "Revere",
    "Salem",
    "Somerville",
    "South Boston",
    "South End",
    "Waltham",
    "Watertown",
    "Wellesley",
    "West Roxbury",
    "Weymouth",
    "Winthrop",
  ];

  return (
    <section className="py-20 px-6 md:px-10 bg-gradient-to-b from-pink-50 via-white to-pink-50 rounded-3xl shadow-xl">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-pink-600 font-berkshire mb-2 text-center drop-shadow-md">
          Areas We Serve for{" "}
          <span className="text-pink-400">Birthday Parties</span>
        </h2>
        <p className="text-md md:text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto font-['Poppins']">
          Proudly bringing the joy of ice cream to birthday celebrations across
          the Greater Boston area since 1999.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {cities.map((city) => (
            <Link
              key={city}
              href={{
                pathname: "/events/birthday-parties",
                query: { city: city.toLowerCase().replace(/\s+/g, "-") },
              }}
              className="flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-pink-100 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <FaMapMarkerAlt className="text-pink-500 text-lg shrink-0" />
              <span className="text-gray-700 font-medium">{city}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
