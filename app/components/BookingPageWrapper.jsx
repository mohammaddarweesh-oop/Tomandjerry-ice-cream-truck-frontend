"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

const BookingPage = dynamic(() => import("./BookingClient"), {
    ssr: false
});

export default function BookingPageWrapper() {
  return (
    <Suspense fallback={<div>Loading booking page...</div>}>
      <BookingPage />
    </Suspense>
  );
}
