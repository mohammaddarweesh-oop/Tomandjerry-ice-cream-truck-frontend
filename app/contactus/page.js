// Client Component
import ContactCards from "../components/ContactCards";
import ContactForm from "../components/ContactForm";

export default function ContactUsServer() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-pink-50 via-blue-100 to-yellow-50 py-20 overflow-hidden min-h-screen">
        {/* Decorative Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg
            className="absolute top-0 left-0 w-full h-full opacity-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <circle cx="20" cy="20" r="10" fill="#f472b6" />
            <circle cx="80" cy="80" r="15" fill="#60a5fa" />
            <circle cx="50" cy="30" r="8" fill="#fefcbf" />
          </svg>
        </div>

        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-pink-700 mb-5 drop-shadow-md font-['Poppins']">
            Contact Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 font-['Poppins']">
            Elevate your events with our Ice Cream Truck! <br />
            Enjoy delightful treats and create sweet moments <br />
            for your parties, weddings, and community celebrations.
          </p>

          {/* هنا بنحط Client Component للـ form */}
          <ContactForm />
        </div>
      </section>
      <ContactCards />
    </>
  );
}
