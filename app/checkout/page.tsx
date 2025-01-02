"use client";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import React, { Suspense, useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);

function Checkout() {
  const searchParams = useSearchParams();

  const bookingId = searchParams.get("bookingId");

  const fetchClientSecret = useCallback(async () => {
    // Create a Checkout Session
    const response = await axios.post("/api/payment", {
      bookingId: bookingId,
    });
    return response.data.clientSecret;
  }, []);

  const options = { fetchClientSecret };

  return (
    <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
      <EmbeddedCheckout />
    </EmbeddedCheckoutProvider>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense>
      <div id="checkout">
        <Checkout />
      </div>
    </Suspense>
  );
}
