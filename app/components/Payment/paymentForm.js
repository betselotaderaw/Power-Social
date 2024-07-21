// pages/api/payment.js

import Coinpayments from 'coinpayments';

const client = new Coinpayments({
    key: process.env.NEXT_PUBLIC_COINPAYMENTS_PUBLIC_KEY,
    secret: process.env.NEXT_PUBLIC_COINPAYMENTS_API_KEY
});

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { amount, currency1, currency2 } = req.body;

        try {
            const response = await client.createTransaction({
                amount,
                currency1, // The currency from the user (e.g., USD)
                currency2, // The cryptocurrency for payment (e.g., BTC)
            });
            res.status(200).json(response);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).end(); // Method Not Allowed
    }
}
