import EventGrid from "../components/EventGrid";
import BookingPageWrapper from "../components/BookingPageWrapper";

export const metadata = {
  title: "Book Our Ice Cream Truck - Tom and Jerry Ice Cream",
  description:
    "Book Speed Ice Cream Truck for your event! Perfect for birthdays, weddings, school events, and community celebrations in Boston and beyond.",
  keywords: [
    "ice cream truck",
    "event catering",
    "boston dessert truck",
    "party booking",
    "ice cream for weddings",
    "Speed Ice Cream",
  ],
  openGraph: {
    title: "Book Our Ice Cream Truck - Tom and Jerry Ice Cream",
    description:
      "Delight your guests with our delicious ice cream truck at your next event in Boston!",
    url: "https://speedicecreamtruck.com/booking",
    type: "website",
    images: [
      {
        url: "https://speedicecreamtruck.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Speed Ice Cream Truck Booking",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book Our Ice Cream Truck - Tom and Jerry Ice Cream",
    description:
      "Book our ice cream truck for your party, wedding, or corporate event in Boston and beyond.",
    images: ["https://speedicecreamtruck.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://speedicecreamtruck.com/booking",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return (
    <>
      <div className="">
        <div className=" pt-16 bg-white"></div>
        <EventGrid />
      </div>
      <BookingPageWrapper />
    </>
  );
}
