// app/api/payment/route.js

import Coinpayments from 'coinpayments';
import { NextResponse } from 'next/server';

// Initialize CoinPayments client with environment variables
const client = new Coinpayments({
    key: process.env.NEXT_PUBLIC_COINPAYMENTS_PUBLIC_KEY,
    secret: process.env.NEXT_PUBLIC_COINPAYMENTS_API_KEY,
});

// Define the data form with hardcoded values for testing
const dataForm = {
    amount: 1, // Test amount

    currency1: 'LTCT', // Base currency
    currency2: 'LTCT', // Litecoin Testnet
    buyer_email: 'betselotagermany@gmail.com', // Test email
    item_name: 'Test Item', // Test item name
    item_number: '123456', // Test item number
};

export async function POST(request) {
    try {
        const response = await client.createTransaction(dataForm);
        return NextResponse.json(response);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
