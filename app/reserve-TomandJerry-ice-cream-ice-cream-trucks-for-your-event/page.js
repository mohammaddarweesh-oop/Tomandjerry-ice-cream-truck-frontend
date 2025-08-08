"use client";

import React, { Suspense } from "react";
import BookingPageWrapper from "../components/BookingPageWrapper";

export default function Page() {
  return (
    <div className="pt-20 px-4 bg-gradient-to-b from-white to-blue-50 min-h-screen">
      <div className="max-w-4xl mx-auto pb-10">
        <h1 className="font-berkshire text-4xl sm:text-5xl md:text-6xl text-center text-blue-700 font-bold mb-10 leading-tight text-shadow-lg ">
          Rent Tom & Jerry Ice Cream Truck
        </h1>
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-10 border border-blue-100">
          {/* <Suspense fallback={<div>Loading...</div>}>
            <BookingPage />
          </Suspense> */}
          <BookingPageWrapper />
        </div>
      </div>
    </div>
  );
}
