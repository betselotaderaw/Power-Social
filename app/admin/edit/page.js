"use client";
import React, { useState } from 'react';
import PocketBase from 'pocketbase';
import { useSearchParams } from 'next/navigation';
import { useRouter as useNextRouter } from 'next/navigation';
export default function Edit() {
    const router = useNextRouter();
    const [searchParams] = useSearchParams();
    const id = searchParams.at(1);

    const [pricingData, setPricingData] = useState(null);


    const fetchPricingData = async () => {
        const pb = new PocketBase('https://power-.pockethost.io');
        const authData = await pb.admins.authWithPassword('aderawbetselot@gmail.com', '0987654321');
        const accessToken = authData.token;

        const data = await pb.collection('pricingData').getOne(id, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        setPricingData(data);
    };

    React.useEffect(() => {
        if (id) {
            fetchPricingData();
        }
    }, [id]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPricingData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSave = async () => {
        const pb = new PocketBase('https://power-.pockethost.io');
        const authData = await pb.admins.authWithPassword('aderawbetselot@gmail.com', '0987654321');
        const accessToken = authData.token;
        await pb.collection('pricingData').update(pricingData.id, pricingData,{
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });
        router.push('/admin');
    };

    const handleDelete = async () => {
        const pb = new PocketBase('http://127.0.0.1:8090');
        await pb.collection('pricingData').deleteOne(pricingData.id);
        router.push('/admin');
    };

    const handleCancel = () => {
        router.push('/admin');
    };

    return (
        <div className=" shadow-md rounded p-12 mt-6">
            {pricingData ? (
                    <div className="grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="title"
                                type="text"
                                name="title"
                                value={pricingData.title}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Price
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="price"
                                type="text"
                                name="price"
                                value={pricingData.price}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="features">
                                Features
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="features"
                                type="text"
                                name="features"
                                value={pricingData.features}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="features">
                                people
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="people"
                                type="text"
                                name="people"
                                value={pricingData.people}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="features">
                                Order
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="order"
                                type="text"
                                name="order"
                                value={pricingData.order}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="buttonText">
                                Button Text
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="buttonText"
                                type="text"
                                name="buttonText"
                                value={pricingData.buttonText}
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="flex  justify-items-end">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 mr-3  rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={handleDelete}>Delete
                            </button>

                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-3 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={handleSave}>Save
                            </button>

                            <button
                                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={handleCancel}>Cancel
                            </button>
                        </div>
                    </div>
                ) :
                <div className="flex justify-center items-center h-screen">
                    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                         role="status">
                        <span className="visually-hidden">(-.-)</span>
                    </div>
                </div>}
        </div>
    );
}