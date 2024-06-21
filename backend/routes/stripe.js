const express = require('express')
const router = express.Router()
const { createPaymentIntent } = require('../services/stripeService')

router.get('/config', (req, res) => {
    res.send({
        publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
    })
})

router.post('/create-payment-intent', async (req, res) => {
    // const { amount } = req.body;
    try {
        const paymentIntent = await createPaymentIntent(100);
        res.send({
            clientSecret: paymentIntent.client_secret
        });
    } catch (error) {
        res.status(400).send({ error: error.message })
    }
});

router.post('/checkout', async (req, res) => {
    const items = req.body.items;
    let lineItems = []
    items.forEach((item) => {
        lineItems.push({
            price: item.id,
            quantity: item.quantity
        })
    })

    const session = await Stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/sucess",
        cancel_url: "http://localhost:3000/cancel"
    })

    res.send(JSON.stringify({
        url: session.url
    }))
})

module.exports = router;