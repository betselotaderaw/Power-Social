// app/payment/page.js

'use client';

import { useState } from 'react';

export default function PaymentPage() {
    const [transaction, setTransaction] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            }
        });

        const data = await response.json();
        setTransaction(data);
    };

    return (
        <div className="p-12 mt-20 ">
            <h1>Make a Payment</h1>
            <form onSubmit={handleSubmit}>
                <button type="submit">Pay $500 with LTCT</button>
            </form>

            {transaction && (
                <div>
                    <h2>Transaction Details</h2>
                    <pre>{JSON.stringify(transaction, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
