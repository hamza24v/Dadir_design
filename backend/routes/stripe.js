const express = require("express");
const router = express.Router();
const { createPaymentIntent } = require("../services/stripeService");
const { sendConfirmationEmail } = require("../services/emailService");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { addEvent, authorize } = require("../services/calendarService");
const dayjs = require("dayjs");

router.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

router.post("/create-payment-intent", async (req, res) => {
  // const { amount } = req.body;
  try {
    const paymentIntent = await createPaymentIntent(100);
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/checkout", express.json("application/json"), async (req, res) => {
  const { items } = req.body;
  const metadata = {};
  try {
    let lineItems = [];
    items.forEach((item) => {
      lineItems.push({
        price: item.priceId,
        quantity: item.quantity,
        description: `${item.selectedService} Service`,
      });
      metadata[`service_${index + 1}_name`] = item.name;
      metadata[`service_${index + 1}_start`] = item.serviceDate.toISOString();
      metadata[`service_${index + 1}_end`] = dayjs(item.serviceDate).add(2, 'hours').toISOString();
      metadata[`service_${index + 1}_type`] = item.selectedService
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",

      phone_number_collection: {
        enabled: true,
      },
      metadata: metadata,
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/shop`,
    });

    res.send(
      JSON.stringify({
        url: session.url,
      })
    );
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const sig = req.headers["stripe-signature"];
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.sendStatus(400);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const customerName = session.customer_details.name;
      const customerEmail = session.customer_details.email;
      const customerPhone = session.customer_details.phone;

      const services = [];
      Object.keys(session.metadata).forEach((key, index) => {
        if (key.includes("service_")) {
          services.push({
            name: session.metadata[`service_${index + 1}_name`],
            startDateTime: session.metadata[`service_${index + 1}_start`],
            endDateTime: session.metadata[`service_${index + 1}_end`],
            type: session.metadata[`service_${index + 1}_type`],
            customerName,
            customerEmail,
            customerPhone,
          });
        }
      });

      authorize()
        .then((auth) => {
          services.forEach((serviceDetails) => {
            addEvent(auth, serviceDetails);
          });
        })
        .catch(console.error);
      console.log(sendConfirmationEmail(customerEmail, services));
    }

    res.status(200).json({ received: true });
  }
);

module.exports = router;
