import { useEffect, useState, useContext } from "react";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { CartContext } from "./CartContext";

function Payment() {
    const [clientSecret, setClientSecret] = useState("");
    const [stripePromise, setStripePromise] = useState(null);
    const { getTotalCost } = useContext(CartContext)

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/stripe/config`)
            .then(async (response) => {
                const { publishableKey } = await response.json();
                setStripePromise(loadStripe(publishableKey))
            });
    }, []);

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/stripe/create-payment-intent`, {
            method: "POST",
            body: JSON.stringify({ amount: getTotalCost() })
        }).then(async (result) => {
            var { clientSecret } = await result.json();
            setClientSecret(clientSecret);
        });
    }, []);

    return (
        <>
            <h1 className="mt-40 text-2xl font-bold text-dark-terminal-color">React Stripe and the Payment Element</h1>
            {clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                    <CheckoutForm />
                </Elements>
            )}
        </>
    );
}

export default Payment;