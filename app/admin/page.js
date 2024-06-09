"use client"
import React, { useEffect, useState } from 'react';
import PocketBase from 'pocketbase';
import Link from "next/link";
export default  function Admin() {
    const [pricingData, setPricingData] = useState([]);

    useEffect(() => {
        const pb = new PocketBase('https://power-.pockethost.io');
        async function fetchData() {
            try {

                // you can also fetch all records at once via getFullList
                const authData = await pb.admins.authWithPassword('aderawbetselot@gmail.com', '0987654321');
                const accessToken = authData.token;
                const data = await pb.collection('pricingData').getFullList({
                    sort: 'order',
                    headers: {
                        'Authorization': `Bearer ${accessToken}`
                    }
                });
                setPricingData(data);
            } catch (error) {
                console.error('Failed to fetch pricing data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className="p-12 mt-20 ">

            { pricingData.length  ?( <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Features
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Button Text
                    </th>
                    <th scope="col" className="px-6 py-3">
                        People
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Order
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Action
                    </th>
                </tr>
                </thead>
                <tbody>
                {pricingData.map((plan) => (
                    <tr key={plan.id} className="bg-white border-b ">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            {plan.title}
                        </th>
                        <td className="px-6 py-4">
                            {plan.price}
                        </td>
                        <td className="px-6 py-4">
                            {plan.features}
                        </td>
                        <td className="px-6 py-4">
                            {plan.buttonText}
                        </td>
                        <td className="px-6 py-4">
                            {plan.people}
                        </td>
                        <td className="px-6 py-4">
                            {plan.order}
                        </td>
                        <td>

                            <Link href={`/admin/edit?id=${plan.id}`}>
                                Edit
                            </Link>
                        </td>
                    </tr>
                ))}


                </tbody>
            </table> ):
                <div className="flex justify-center items-center h-screen">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                         role="status">
                        <span className="visually-hidden">(-.-)</span>
                    </div>
                </div>
            }
        </div>
    )
}