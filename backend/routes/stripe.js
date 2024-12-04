const express = require("express");
const router = express.Router();
const { sendConfirmationEmail } = require("../services/emailService");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { addEvent } = require("../services/calendarService");
const dayjs = require("dayjs");

router.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

router.post("/checkout", express.json("application/json"), async (req, res) => {
  const { items } = req.body;
  const metadata = {};
  try {
    let lineItems = [];
    items.forEach((item, index) => {
      lineItems.push({
        price: item.priceId,
        quantity: item.quantity,
      });
      metadata[`service_${index + 1}_name`] = item.name;
      metadata[`service_${index + 1}_start`] = item.serviceDate;
      metadata[`service_${index + 1}_end`] = dayjs(item.serviceDate)
        .add(2, "hours")
        .toISOString();
      metadata[`service_${index + 1}_type`] = item.selectedService;
      metadata[`service_${index + 1}_location`] =
        item.selectedService === "Assembly"
          ? item.assemblyLocation
          : JSON.stringify(item.deliveryLocation);
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
  async (req, res) => {
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
      return res.status(400).send(`Webhook error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const customerName = session.customer_details.name;
      const customerEmail = session.customer_details.email;
      const customerPhone = session.customer_details.phone;

      const services = [];
      Object.keys(session.metadata).forEach((key, index) => {
        if (
          key.includes("service_") &&
          session.metadata[`service_${index + 1}_name`] !== undefined
        ) {
          services.push({
            name: session.metadata[`service_${index + 1}_name`],
            startDateTime: session.metadata[`service_${index + 1}_start`],
            endDateTime: session.metadata[`service_${index + 1}_end`],
            type: session.metadata[`service_${index + 1}_type`],
            location: session.metadata[`service_${index + 1}_location`],
            customerName,
            customerEmail,
            customerPhone,
          });
        }
      });

      services.forEach((serviceDetails) => {
        addEvent(serviceDetails);
      });
      sendConfirmationEmail(customerEmail, services);
    }

    res.status(200).json({ received: true });
  }
);

module.exports = router;
