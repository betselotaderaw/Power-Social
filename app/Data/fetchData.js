
import DbAuth from "../components/Utils/DbAuth";
import Dbpb from "../components/Utils/DbInstance";

export const fetchData = async () => {
    try {
        const Dbpb = await DbAuth(); // Fetch token from local storage
        //localStorage.setItem('Dbpb', Dbpb);
        return await Dbpb.collection('pricingData').getFullList({
            sort: 'order',

        });
    } catch (error) {
        console.error('Failed to fetch pricing data:', error);
    }
};

export const fetchById = async (id) => {
    try {
        const Dbpb = await DbAuth(); // Fetch token from local storage

        return await Dbpb.collection('pricingData').getOne(id, {
            sort: 'order',
        });
    } catch (error) {
        console.error('Failed to fetch pricing data:', error);
    }
};