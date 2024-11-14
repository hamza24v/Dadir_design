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

router.post("/checkout", express.json('application/json'), async (req, res) => {
  const { items } = req.body
  try {
    let lineItems = [];
    let serviceDates = [];
    items.forEach((item) => {
      lineItems.push({
        price: item.priceId,
        quantity: item.quantity,
      });
      serviceDates.push({
        name: item.name,
        startDateTime: item.serviceDate,
        endDateTime: dayjs(item.serviceDate).add(2, 'hours')
      });
    });

    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",

      phone_number_collection: {
        enabled: true,
      },
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

    // Handle the checkout.session.completed event
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      // Extract the customer's email and metadata for service details
      const customerEmail = "hamzashueib23@gmail.com" || session.customer_details.email;
      // const services = [];
      // Object.keys(session.metadata).forEach((key, index) => {
      //   if (key.includes("service") && key.includes("_name")) {
      //     services.push({
      //       name: session.metadata[`service_${index + 1}_name`],
      //       date: session.metadata[`service_${index + 1}_date`],
      //     });
      //   }
      // });
      const services = [
        {
          name: "Furniture Assembly Service",
          date: "2024-10-17T20:00:00Z",
          customerName: "Hamza Shueib",
          customerEmail: "hamzashueib23@gmail.com",
          phoneNumber: ""
        },
        {
          name: "Delivery Service",
          date: "2024-10-18T10:00:00Z",
          customerName: "Hamza Shueib",
          customerEmail: "hamzashueib23@gmail.com"
        },
      ];
      authorize().then((auth) => {
        services.forEach((serviceDetails) => {
          addEvent(auth, serviceDetails);
        });
      }).catch(console.error);
      console.log(sendConfirmationEmail(customerEmail, services));
    }

    res.status(200).json({ received: true });
  }
);

module.exports = router;
