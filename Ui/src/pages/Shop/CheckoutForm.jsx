import { PaymentElement } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [message, setMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/completion`,
      },
    });

    if (error.type === "card_error" || error.type === "validation_error") {
      setMessage(error.message);
    } else {
      setMessage("An unexpected error occurred.");
    }

    setIsProcessing(false);
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="border border-light-grey rounded radius p-5 my-5 shadow-md">
      <PaymentElement id="payment-element" className="mb-2" />
      <button disabled={isProcessing || !stripe || !elements} id="submit" className="bg-accent text-white rounded radius p-3 mt-4 font-semibold transition-all duration-200 hover:contrast-115 active:scale-98 active:brightness-90 disabled:opacity-50 disabled:cursor-not-allowed">
        <span id="button-text">
          {isProcessing ? "Processing ... " : "Pay now"}
        </span>
      </button>
      {message && <div id="payment-message" className="bg-dark-terminal text-green-500 p-5 my-5 rounded radius font-mono text-sm">{message}</div>}
    </form>
  );
}
