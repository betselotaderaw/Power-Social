import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faLock, faHeadset, faDollarSign, faChartLine, faCreditCard, faClock, faTruck } from "@fortawesome/free-solid-svg-icons";

export default function WhyChooseUs() {
    const services = [
        { icon: faCheckCircle, title: "Premium Quality Services", description: "We do not compromise on the quality of the services and ensure that our customers are 100% satisfied." },
        { icon: faLock, title: "Highly Secure Dealing", description: "The security of our customers is our top priority, and we use an SSL-backed system that ensures all your information is safe." },
        { icon: faHeadset, title: "Round the Clock Customer Support", description: "You can reach out to us whenever you need our help. Our representatives are available round the clock." },
        { icon: faDollarSign, title: "Pocket-Friendly Services", description: "Our services are budget-friendly, and you can benefit from bonus offers." },
        { icon: faChartLine, title: "Guaranteed Growth", description: "We work hard to guarantee growth for all customers who join our team." },
        { icon: faCreditCard, title: "Easy Payment Methods", description: "To offer convenient services, we offer multiple payment methods such as GooglePay, ApplePay, and cryptocurrencies." },
        { icon: faClock, title: "Stable Growth", description: "Our business motto is to offer stable growth for your business and ours." },
        { icon: faTruck, title: "On-Time Delivery", description: "Our services will be delivered to you on the time we promise." },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-8">
            {services.map((service, index) => (
                <div key={index} className="flex items-start space-x-4">
                    <FontAwesomeIcon icon={service.icon} size="2x" className="text-blue-500" />
                    <div>
                        <h3 className="text-md font-bold">{service.title}</h3>
                        <p className="text-base text-gray-700 text-md">{service.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
