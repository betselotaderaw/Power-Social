"use client"
import React, { useState } from 'react';
import { Row, Col } from 'antd';
import PriceBox from './pricebox.jsx';


import PocketBase from 'pocketbase';
export default  function Price(){
    const [pricingData, setPricingData] = useState([]);

    const fetchPricingData = async () => {
        const pb = new PocketBase('https://power-.pockethost.io');
        // you can also fetch all records at once via getFullList
        const authData = await pb.admins.authWithPassword('aderawbetselot@gmail.com', '0987654321');
        const accessToken = authData.token;
        const pricingData = await pb.collection('pricingData').getFullList({
            sort: 'order',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        setPricingData(pricingData);
    };

    React.useEffect(() => {
        fetchPricingData();
    }, []);



    return (
        <div className="p-12 mt-6 ">
            <Row gutter={[20, 20]}>
                {pricingData.map((plan) => (
                    <Col key={plan.id} xs={24} md={8} lg={6}>
                        <PriceBox key={plan.title} {...plan} />
                    </Col>
                )) ?? <></>}
            </Row>
        </div>
    );
}