'use client'
import Admin from "./admin";
import React, { useState, useEffect } from "react";
import {fetchData} from "../Data/fetchData";
export default function Page() {
    const [pricingData, setPricingData] = useState(null);
    useEffect(() => {
        async function fetchPricingData() {
            const data = await fetchData();
            setPricingData(data);
        }
        fetchPricingData();
    }, []);
    return(
        <Admin pricingData={pricingData}/>
    )
}