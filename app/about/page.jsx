"use client";
import React, {useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
export function page() {
    const data = [
        {
            imgelink:
                "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
        },
        {
            imgelink:
                "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
        },
        {
            imgelink:
                "https://socialsup.net/wp-content/uploads/socialsup-office3.jpg",
        },
    ];

    const [activeIndex, setActive] = React.useState(0);

    useEffect(() => {
       setInterval(() => {
           setActive((prev) => (prev + 1) % data.length);
       }, 6000);
        return () => clearInterval();
    }, [data.length]);


    const handleNext = () => {
        setActive((prev) => (prev + 1) % data.length);
    };
    const handlePrev = () => {
        setActive((prev) => (prev - 1 + data.length) % data.length);
    };
    return (
        <div className="grid gap-4 mt-20 pt-4 ">
            <div className="relative ">
                <img
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center sm:h-[100px] md:h-[200px] lg:h-[200px] xl:h-[200px]"
                    src={data[activeIndex].imgelink}
                    alt=""
                />
                <div className="absolute left-0 right-0 bottom-2 flex justify-center space-x-2">
                    {data.map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full bg-gray-300 ${activeIndex === index ? 'bg-blue-700' : ''}`}
                        />
                    ))}
                </div>
                <button
                    onClick={handlePrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md"
                >
                    <FontAwesomeIcon icon={faArrowLeft} size="xs" className="text-white"/>
                </button>
                <button
                    onClick={handleNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent p-2 rounded-full shadow-md"
                >
                    <FontAwesomeIcon icon={faArrowRight} size="xs" className="text-white"/>
                </button>
            </div>
            <div className="sm:px-10 md:px-15 lg:px-65 xl:px-65">
                    <p className="mb-4 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-sm md:text-md">
                        Company Social Media is dedicated to empowering you in the ever-evolving world of social media.
                        Founded in June 2020, we're a passionate team of social media experts, developers, and marketing
                        specialists with a shared goal: to help you achieve social media success.</p>
                    <p className="mb-4 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-sm md:text-md">
                        We understand the complexities of navigating different platforms and the constant need to stay
                        ahead of the curve. That's why we provide a comprehensive suite of services tailored to each
                        major social media platform. Whether you're looking to amplify your brand presence, build a
                        loyal following, or simply improve engagement, we have the expertise to help you achieve your
                        goals.
                    </p>
                    <p className="mb-4 text-base !leading-relaxed text-body-color font-bold sm:text-sm md:text-md">
                        Here's what sets us apart:
                    </p>
                    <p className="mb-4 sm:px-15 md:px-20 lg:px-30 xl:px-40 text-base !leading-relaxed text-body-color  sm:text-sm md:text-md">
                        • <strong>Platform-Specific Strategies:</strong> We don't believe in a one-size-fits-all
                        approach. Our team stays
                        up-to-date on the latest trends and algorithms for each platform, ensuring your social media
                        strategy is optimized for maximum impact.
                    </p>
                    <p className="mb-4 sm:px-15 md:px-20 lg:px-30 xl:px-40 text-base !leading-relaxed text-body-color  sm:text-sm md:text-md">
                        • <strong>Results-Oriented Approach:</strong> We're data-driven and transparent. We track your
                        progress, analyze results, and constantly refine our strategies to ensure you're getting the
                        most out of your social media investment.
                    </p>
                    <p className="mb-4 sm:px-15 md:px-20 lg:px-30 xl:px-40 text-base !leading-relaxed text-body-color  sm:text-sm md:text-md">
                        • <strong>Experienced Team:</strong> Our team boasts a wealth of experience across social media
                        marketing, development, and content creation. We're passionate about what we do and dedicated to
                        your success.
                    </p>
                    <p className="mb-4 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-sm md:text-md">
                        <strong>Don't let social media overwhelm you.</strong> Let Company Social Media be your partner
                        in achieving your social media goals. Contact us today and let's discuss how we can help you
                        take your social presence to the next level.
                    </p>
                    <p className="mb-4 text-2xl font-bold  sm:text-1xl md:text-2xl">
                        Our Mission
                    </p>
                    <p className="mb-4 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-sm md:text-md">
                        We're on a mission to make social media success accessible to everyone. We believe that strong
                        social media presence is essential for businesses and individuals alike. We're here to equip you
                        with the tools and strategies you need to thrive in the digital landscape.
                    </p>

                    <p className="mb-4 font-bold sm:text-sm md:text-md">
                        In short, your social media success is our passion.
                    </p>


            </div>
            <div className="relative ">
                <img
                    className="h-auto w-full max-w-full rounded-lg object-cover object-center sm:h-[100px] md:h-[200px] lg:h-[200px] xl:h-[200px]"
                    src={data[4].imgelink}
                    alt=""
                />
            </div>
            <div className="sm:px-10 md:px-15 lg:px-65 xl:px-65">
                <p className="mb-4 text-2xl font-bold  sm:text-1xl md:text-2xl">
                    How We Here To Help You Win
                </p>
                <p className="mb-4 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-sm md:text-md">
                    We don't do cookie-cutter plans. We tailor strategies for each client's goals, using data and expert
                    content creation to grow your audience.
                </p>
                <p className="mb-4 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-sm md:text-md">
                    <strong>Our focus:</strong> Engagement, not just followers. We build real communities around your
                    brand through social media management and reporting that keeps you informed.
                </p>
                <p className="mb-4 text-base !leading-relaxed text-body-color font-bold sm:text-sm md:text-md">
                    The Benefits:
                </p>
                <p className="mb-1 sm:px-15 md:px-20 lg:px-30 xl:px-40 text-base !leading-relaxed text-body-color  sm:text-sm md:text-md">
                    • Greater online visibility
                </p>
                <p className="mb-1 sm:px-15 md:px-20 lg:px-30 xl:px-40 text-base !leading-relaxed text-body-color  sm:text-sm md:text-md">
                    • Improved sales & conversions
                </p>
                <p className="mb-1 sm:px-15 md:px-20 lg:px-30 xl:px-40 text-base !leading-relaxed text-body-color  sm:text-sm md:text-md">
                    • Boosted engagement
                </p>
                <p className="mb-4 sm:px-15 md:px-20 lg:px-30 xl:px-40 text-base !leading-relaxed text-body-color  sm:text-sm md:text-md">
                    • Increased brand awareness
                </p>
                <p className="mb-4 font-bold sm:text-sm md:text-md">
                    Ready to win on social media? Let's chat!
                </p>
            </div>

        </div>
    );
}

export default page;