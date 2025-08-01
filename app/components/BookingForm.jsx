// "use client";
// import { useState, useEffect } from "react";
// import { useSearchParams } from "next/navigation";
// import axios from "axios";

// export default function BookingForm() {
//   const searchParams = useSearchParams();

//   const initialFormState = {
//     name: "",
//     email: "",
//     address: "",
//     city: "",
//     zipCode: "",
//     phone: "",
//     dateTime: "",
//     attendees: 1,
//     duration: 60,
//     comments: "",
//   };

//   const [form, setForm] = useState(initialFormState);
//   const [message, setMessage] = useState(null);

//   useEffect(() => {
//     const offer = {
//       comments: `
// Offer Title: ${searchParams.get("title") || ""}
// Price: ${searchParams.get("price") || ""}
// People: ${searchParams.get("people") || ""}
// Extra: ${searchParams.get("extra") || ""}
// Duration: ${searchParams.get("duration") || ""}
// `.trim(),
//       attendees: extractNumber(searchParams.get("people")),
//       duration: extractMinutes(searchParams.get("duration")),
//     };

//     setForm((prev) => ({
//       ...prev,
//       ...offer,
//     }));
//   }, [searchParams]);

//   const extractNumber = (str) => {
//     if (!str) return 1;
//     const match = str.match(/\d+/g);
//     return match ? parseInt(match[0], 10) : 1;
//   };

//   const extractMinutes = (str) => {
//     if (!str) return 60;
//     if (str.includes("hour")) return 90;
//     const match = str.match(/\d+/g);
//     return match ? parseInt(match[0], 10) : 60;
//   };

//   const handleChange = (e) =>
//     setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:4000/api/booking", form);
//       setMessage("Your booking request has been submitted successfully!");
//       setForm(initialFormState);
//     } catch (err) {
//       setMessage("An error occurred. Please try again later.");
//     }
//   };

//   const inputs = [
//     { label: "Name", id: "name", type: "text" },
//     { label: "Email", id: "email", type: "email" },
//     { label: "Address", id: "address", type: "text" },
//     { label: "City", id: "city", type: "text" },
//     { label: "Zip Code", id: "zipCode", type: "text" },
//     { label: "Phone", id: "phone", type: "tel" },
//     { label: "Event Date & Time", id: "dateTime", type: "datetime-local" },
//     {
//       label: "Number of People Attending",
//       id: "attendees",
//       type: "number",
//       min: 1,
//     },
//     {
//       label: "Duration (minutes)",
//       id: "duration",
//       type: "number",
//       min: 1,
//     },
//   ];

//   return (
//     <>
//       {message && (
//         <p
//           className={`mb-6 text-center font-semibold p-3 rounded-lg shadow ${
//             message.includes("error")
//               ? "text-red-600 bg-red-100"
//               : "text-green-600 bg-green-100"
//           }`}
//         >
//           {message}
//         </p>
//       )}

//       <div className="bg-white rounded-lg shadow-lg p-6 text-black">
//         <form onSubmit={handleSubmit} className="space-y-8">
//           {inputs.map(({ label, id, type, min }) => (
//             <div key={id} className="relative">
//               <input
//                 id={id}
//                 name={id}
//                 type={type}
//                 min={min}
//                 value={form[id]}
//                 onChange={handleChange}
//                 placeholder=" "
//                 required
//                 className="peer w-full border border-gray-300 text-sm rounded-md px-3 pt-5 pb-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
//               />
//               <label
//                 htmlFor={id}
//                 className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2.5 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-3"
//               >
//                 {label}
//               </label>
//             </div>
//           ))}

//           {/* Textarea */}
//           <div className="relative">
//             <textarea
//               id="comments"
//               name="comments"
//               value={form.comments}
//               onChange={handleChange}
//               placeholder=" "
//               rows={4}
//               className="peer w-full border border-gray-300 text-sm rounded-md px-3 pt-5 pb-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
//             />
//             <label
//               htmlFor="comments"
//               className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2.5 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:top-4 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-3"
//             >
//               Additional Comments
//             </label>
//           </div>

//           <button
//             type="submit"
//             className="bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-700 transition duration-300 hover:scale-105"
//           >
//             Submit Booking
//           </button>
//         </form>
//       </div>
//     </>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import axios from "axios";

export default function BookingForm() {
  const searchParams = useSearchParams();

  const initialFormState = {
    name: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    dateTime: "",
    attendees: 1,
    duration: 60,
    comments: "",
  };

  const [form, setForm] = useState(initialFormState);
  const [message, setMessage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const offer = {
      comments: `
Offer Title: ${searchParams.get("title") || ""}
Price: ${searchParams.get("price") || ""}
People: ${searchParams.get("people") || ""}
Extra: ${searchParams.get("extra") || ""}
Duration: ${searchParams.get("duration") || ""}
`.trim(),
      attendees: extractNumber(searchParams.get("people")),
      duration: extractMinutes(searchParams.get("duration")),
    };

    setForm((prev) => ({
      ...prev,
      ...offer,
    }));
  }, [searchParams]);

  const extractNumber = (str) => {
    if (!str) return 1;
    const match = str.match(/\d+/g);
    return match ? parseInt(match[0], 10) : 1;
  };

  const extractMinutes = (str) => {
    if (!str) return 60;
    if (str.includes("hour")) return 90;
    const match = str.match(/\d+/g);
    return match ? parseInt(match[0], 10) : 60;
  };

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    try {
      await axios.post("http://localhost:4000/api/booking", form);
      setMessage("Your booking request has been submitted successfully!");
      setForm(initialFormState);
    } catch (err) {
      setMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // الحد الأدنى للـ datetime-local هو الوقت الحالي
  const minDateTime = new Date().toISOString().slice(0, 16);

  const inputs = [
    { label: "Name", id: "name", type: "text" },
    { label: "Email", id: "email", type: "email" },
    { label: "Address", id: "address", type: "text" },
    { label: "City", id: "city", type: "text" },
    { label: "Zip Code", id: "zipCode", type: "text" },
    { label: "Phone", id: "phone", type: "tel" },
    { label: "Event Date & Time", id: "dateTime", type: "datetime-local", min: minDateTime },
    { label: "Number of People Attending", id: "attendees", type: "number", min: 1 },
    { label: "Duration (minutes)", id: "duration", type: "number", min: 1 },
  ];

  return (
    <>
      {message && (
        <p
          className={`mb-6 text-center font-semibold p-3 rounded-lg shadow ${
            message.toLowerCase().includes("error")
              ? "text-red-600 bg-red-100"
              : "text-green-600 bg-green-100"
          }`}
          role="alert"
          aria-live="assertive"
        >
          {message}
        </p>
      )}

      <div className="bg-white rounded-lg shadow-lg p-6 text-black max-w-xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-8">
          {inputs.map(({ label, id, type, min }) => (
            <div key={id} className="relative">
              <input
                id={id}
                name={id}
                type={type}
                min={min}
                value={form[id]}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer w-full border border-gray-300 text-sm rounded-md px-3 pt-5 pb-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
                aria-required="true"
                aria-label={label}
              />
              <label
                htmlFor={id}
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2.5 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-3"
              >
                {label}
              </label>
            </div>
          ))}

          {/* Textarea */}
          <div className="relative">
            <textarea
              id="comments"
              name="comments"
              value={form.comments}
              onChange={handleChange}
              placeholder=" "
              rows={4}
              className="peer w-full border border-gray-300 text-sm rounded-md px-3 pt-5 pb-2.5 text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-pink-600"
              aria-label="Additional Comments"
            />
            <label
              htmlFor="comments"
              className="absolute text-sm text-gray-500 duration-300 transform -translate-y-3 scale-75 top-2.5 left-3 z-10 origin-[0] bg-white px-1 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-2.5 peer-placeholder-shown:top-4 peer-focus:top-2.5 peer-focus:scale-75 peer-focus:-translate-y-3"
            >
              Additional Comments
            </label>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-pink-600 text-white px-6 py-3 rounded-full text-lg font-semibold transition duration-300 hover:scale-105 transform ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:bg-pink-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Booking"}
          </button>
        </form>
      </div>
    </>
  );
}
