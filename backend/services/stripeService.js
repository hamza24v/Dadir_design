const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const createPaymentIntent = async (amount) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'usd',
            automatic_payment_methods: { enabled: true },
        })
        return paymentIntent
    } catch (error) {
        throw new Error(error.message)
    }
};

module.exports = { createPaymentIntent }