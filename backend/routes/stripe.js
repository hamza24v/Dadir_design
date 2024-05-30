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

module.exports = router;