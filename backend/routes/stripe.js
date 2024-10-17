const express = require('express')
const router = express.Router()
const { createPaymentIntent } = require('../services/stripeService')
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

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
    const { items } = req.body;
    try {
        let lineItems = []
        items.forEach((item) => {
            lineItems.push({
                price: item.priceId,
                quantity: item.quantity
            })
        })

        const session = await stripe.checkout.sessions.create({
            line_items: lineItems,
            mode: 'payment',

            shipping_address_collection: {
                allowed_countries: ['US'],
            },

            metadata: {
                service_date: selectedDate
            },
            success_url: `${process.env.CLIENT_URL}/success`,
            cancel_url: `${process.env.CLIENT_URL}/Shop`,

            
        })

        res.send(JSON.stringify({
            url: session.url
        }))
    } catch (err) {
        res.status(400).send({ error: err.message })
    }
})

module.exports = router;