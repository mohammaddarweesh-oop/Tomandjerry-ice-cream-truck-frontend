import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Ice Cream Truck",
  description: "We bring ice cream to your neighborhood!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-pink-50 text-gray-900 font-sans">
        <Navbar />
        {children}

        <Footer />
      </body>
    </html>
  );
}
