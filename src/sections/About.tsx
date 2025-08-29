"use client";

import React from 'react';
import Image from 'next/image';
import TopSection from "@/components/TopSection";
import aboutImage from '/public/images/about_us.jpg';
import SectionHeading from "@/components/SectionHeading";

const AboutUs: React.FC = () => {
    const stats = [
        {value: "10+", label: "Professional Drivers"},
        {value: "24/7", label: "Service Available"},
        {value: "100+", label: "Destinations"},
        {value: "100%", label: "Customer Satisfaction"}
    ];

    return (
        <section id="about" className="py-20 mx-auto relative overflow-hidden">
            {/* Luxury background */}
            <div className="absolute inset-0 gradient-primary">
                <div className="absolute top-10 left-10 w-72 h-72 bg-red-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <TopSection
                                title="About taxi thissamaharama"
                    description="We provide reliable and comfortable transportation services across Sri Lanka, connecting travelers with professional drivers for a seamless journey experience."
                                highlightWord="taxi thissamaharama"
                                popupTitle="About taxi thissamaharama: Your Premier Transportation Partner in Sri Lanka"
                    paragraph={
                        <div className="flex flex-col gap-4 text-gray-300">
                            <p>
                                            At taxi thissamaharama, we are dedicated to redefining your travel experience across the beautiful
                                island of Sri Lanka. As a leading transportation service, TakeMeLK specializes in
                                            providing reliable, comfortable, and safe journeys for both local and international
                                travelers. Our mission at TakeMeLK is to seamlessly connect you with a network of highly
                                professional, experienced, and courteous drivers, ensuring every trip is not just a
                                ride, but a part of your unforgettable Sri Lankan adventure.
                            </p>
                            <p>
                                From the bustling streets of Colombo to the serene beaches of Mirissa, the cultural
                                heartland of Kandy, and the ancient cities of Sigiriya and Anuradhapura, TakeMeLK covers
                                            every corner of Sri Lanka. We understand that efficient and hassle-free transportation
                                is crucial for a truly enjoyable trip, which is why TakeMeLK offers a diverse fleet of
                                well-maintained vehicles to suit every need and group size – from comfortable sedans for
                                solo explorers or couples, to spacious vans for families and tour groups.
                            </p>
                            <p>
                                            Choosing taxi thissamaharama means opting for peace of mind. We prioritize your safety and
                                satisfaction above all else. Our advanced booking system makes planning your journeys
                                effortless, allowing you to secure your transportation with TakeMeLK well in advance.
                                Whether you require airport transfers, inter-city travel, bespoke tour packages, or
                                daily commutes, TakeMeLK is your trusted partner for a seamless journey experience.
                                            Discover the true essence of Sri Lanka with taxi thissamaharama – where reliability meets comfort,
                                and every mile is a pleasure. Experience the difference with TakeMeLK and let us take
                                you on an incredible journey.
                            </p>
                        </div>
                    }
                />

                <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Image Section */}
                    <div className="hidden md:block glass-card rounded-2xl shadow-luxury p-8 animate-fade-in-luxury border border-white/10">
                        <div className="relative">
                            <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-red-400 rounded-full"></div>
                            <div className="relative h-[400px] w-full rounded-xl overflow-hidden">
                                <Image
                                    src={aboutImage}
                                    alt="About TakeMeLK"
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className="hover:scale-105 transition-all duration-700 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="glass-card rounded-2xl shadow-luxury p-8 animate-slide-in-luxury border border-white/10"
                         style={{animationDelay: "200ms"}}>
                        <SectionHeading title="Why Choose Us" className="text-white mb-6"/>

                        <p className="text-gray-300 mb-8 leading-relaxed">
                                        At taxi thissamaharama, we take pride in delivering exceptional transportation services with a focus on
                            reliability,
                            comfort, and customer satisfaction. Our team of experienced drivers knows every corner of
                            Sri Lanka,
                            ensuring you reach your destination safely and on time.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center p-6 glass-premium rounded-xl border border-white/10 hover:border-red-400/50 hover:bg-white/5 transition-all duration-300 animate-fade-in-luxury"
                                    style={{animationDelay: `${index * 150 + 400}ms`}}
                                >
                                    <span className="text-red-400 font-bold text-4xl mb-3 text-luxury">{stat.value}</span>
                                    <p className="text-center text-gray-300 text-sm font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;