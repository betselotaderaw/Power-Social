"use client"
import menuData from "../../../components/Header/menuData";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Price from "./priceList";

const fetchSubmenu = (id) => {
    const mainId = Math.floor(id / 10);
    const menu = menuData.find((menu) => menu.id === mainId);
    if (menu && menu.submenu) {
        return menu.submenu.find((submenu) => submenu.id == id);
    }
    return null;
}
const PriceDef = ({ params }) => {
    const id = params.id;

    const submenu = fetchSubmenu(id);
    return (
        <div className="pl-32 mt-28 flex justify-center">
            <div className=" p-6" >
                <div className="flex items-center mb-4">
                    <FontAwesomeIcon icon={submenu?.icon} size="2x" className="text-blue-500 mr-4"/>
                    <h1 className="text-2xl font-bold">{submenu?.title}</h1>
                </div>
                <p className="text-lg text-gray-700 mb-6">{submenu?.description}</p>
                <div className="flex justify-center mb-1">
                    <img src="/images/price/payType2.png" alt="Payment Methods"
                         className="w-full max-w-screen-sm "/>
                </div>
                <Price priceId={id}/>
            </div>
        </div>
    )
}

export default PriceDef;