import { notFound } from "next/navigation";
import Image from "next/image";

import TestimonialSection from "@/app/components/TestimonialSection";
import EventGrid from "@/app/components/EventGrid";
import EventsSection from "@/app/components/EventsSection";
import IntroParagraph from "@/app/components/IntroParagraph";
import BookingPage from "@/app/components/BookingClient";

const eventData = {
  "event-catering": {
    title: "Event Catering",
    description:
      "Professional ice cream catering for any event, large or small.",
    image: "/images/events/event-catering.jpg",
    bgColor: "#ffc9de",
  },
  "birthday-parties": {
    title: "Birthday Parties",
    description: "Celebrate birthdays with sweet ice cream and fun memories.",
    image: "/images/events/birthday.webp",
    bgColor: "#da8ec0",
  },
  "block-parties": {
    title: "Block Parties",
    description: "Bring your neighborhood together with our ice cream truck.",
    image: "/images/events/block.webp",
    bgColor: "#eeafc5",
  },
  "corporate-parties": {
    title: "Corporate Parties",
    description:
      "Impress your coworkers with ice cream catering at your office.",
    image: "/images/events/corporate.jpg",
    bgColor: "#f7ccd1",
  },
  fundraisers: {
    title: "Fundraisers",
    description:
      "Delight attendees while raising funds with our unique service.",
    image: "/images/events/fundraiser.jpg",
    bgColor: "#6acbde",
  },
  "launch-parties": {
    title: "Launch Parties",
    description: "Make your brand's big moment unforgettable with us.",
    image: "/images/events/launch.jpg",
    bgColor: "#a3dee8",
  },
  "marketing-events": {
    title: "Marketing Events",
    description: "Engage your audience with our vibrant and delicious truck.",
    image: "/images/events/marketing.jpg",
    bgColor: "#f2e9d3",
  },
  "movie-rental": {
    title: "Movie Rental",
    description: "Pair your outdoor movie night with fresh, cold treats.",
    image: "/images/events/movie.jpg",
    bgColor: "#da8ec0",
  },
  "photo-shoots": {
    title: "Photo Shoots",
    description:
      "Add flavor and fun to your photoshoots with our ice cream truck.",
    image: "/images/events/photo-shoots.webp",
    bgColor: "#f2e9d3",
  },
  reunions: {
    title: "Reunions",
    description: "Turn any reunion into a delicious gathering to remember.",
    image: "/images/events/reunion.jpg",
    bgColor: "#f7ccd1",
  },
  "school-events": {
    title: "School Events",
    description: "Reward students and staff with a refreshing treat.",
    image: "/images/events/school.jpg", //
    bgColor: "#6acbde",
  },
  "sporting-events": {
    title: "Sporting Events",
    description: "Celebrate your wins and cool down with ice cream.",
    image: "/images/events/sports.webp",
    bgColor: "#a3dee8",
  },
  "wedding-receptions": {
    title: "Wedding Receptions",
    description: "Add a touch of sweetness to your big day.",
    image: "/images/events/wedding.webp",
    bgColor: "#f2e9d3",
  },
};

export async function generateMetadata({ params }) {
  const event = eventData[params.slug];
  if (!event) {
    return {
      title: "Event Not Found | TomandJerry Ice Cream",
      description: "Book TomandJerry Ice Cream for your event in Boston.",
    };
  }

  return {
    title: `${event.title} | TomandJerry Ice Cream`,
    description: event.description,
    keywords: [
      "TomandJerry Ice Cream",
      "Boston Ice Cream Truck",
      "Event Catering",
      event.title,
    ],
    authors: [
      { name: "TomandJerry Team", url: "https://tomandjerryicecream.com" },
    ],
    metadataBase: new URL("https://tomandjerryicecream.com"),
    openGraph: {
      title: `${event.title} | TomandJerry Ice Cream`,
      description: event.description,
      url: `https://tomandjerryicecream.com/events/${params.slug}`,
      siteName: "TomandJerry Ice Cream",
      images: [
        {
          url: event.image,
          width: 1200,
          height: 630,
          alt: event.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${event.title} | TomandJerry Ice Cream`,
      description: event.description,
      images: [event.image],
      site: "@TomandJerryIce",
    },
  };
}

export default function EventPage({ params }) {
  const event = eventData[params.slug];

  if (!event) return notFound();

  return (
    <div className="bg-pink-50  min-h-screen font-poppins text-gray-800">
      <section className="relative h-[100vh] overflow-hidden mt-0">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          quality={80}
          loading="lazy"
          placeholder="blur"
          blurDataURL="/placeholder-event.jpg"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white/60 p-6 sm:p-8 rounded-2xl text-center max-w-2xl shadow-xl transition-transform duration-300 hover:scale-105">
            <h1 className="text-4xl sm:text-5xl font-bold text-pink-600 mb-4 font-berkshire text-shadow-lg ">
              {event.title}
            </h1>
            <p className="text-base sm:text-lg text-gray-700">
              {event.description}
            </p>
          </div>
        </div>
      </section>

      <IntroParagraph />
      <EventsSection />
      <BookingPage />
      <EventGrid />
      <TestimonialSection />
    </div>
  );
}
