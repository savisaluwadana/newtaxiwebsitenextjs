"use client";

import React from 'react';
import TopSection from "@/components/TopSection";
import Image from 'next/image';

import miniCar from '/public/images/mini_car.jpeg';
import sedan from '/public/images/sedan_car.jpeg';
import kdh from '/public/images/kdh.jpeg';
import van from '/public/images/kdh_high.jpeg';
//this is a comment
const Fleet: React.FC = () => {
    const vehicles = [
        {
            "id": 1,
            "name": "Mini Car",
            "description": "Perfect for small groups or couples, our mini cars offer excellent fuel efficiency and easy maneuverability through Sri Lanka's busy streets.",
            "image": miniCar,
            "passengerCapacity": 4,
        },
        {
            "id": 2,
            "name": "Sedan",
            "description": "Combining comfort with style, our sedans provide a smooth ride with ample luggage space, ideal for airport transfers and city tours.",
            "image": sedan,
            "passengerCapacity": 4,
        },
        {
            "id": 3,
            "name": "KDH",
            "description": "Spacious and comfortable, our KDH vans are perfect for medium-sized groups looking to travel together while enjoying panoramic views.",
            "image": kdh,
            "passengerCapacity": 10,
        },
        {
            "id": 4,
            "name": "KDH - High Roof",
            "description": "Our premium high-roof vans offer maximum headroom and seating for larger groups, ensuring comfort on even the longest journeys.",
            "image": van,
            "passengerCapacity": 14,
        },
    ]

    return (
        <section id="fleet" className="py-20 mx-auto relative overflow-hidden">
            {/* Luxury background */}
            <div className="absolute inset-0 gradient-primary">
                <div className="absolute top-20 right-10 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 left-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <TopSection
                    title="Our Premium Fleet"
                    description="Experience Sri Lanka in comfort and style with our diverse range of vehicles. Each meticulously maintained to ensure your journey is as enjoyable as your destination."
                    highlightWord="Fleet"
                    popupTitle="Our Premium taxi thissamaharama Fleet: Comfort, Style & Safety for Your Sri Lankan Journey"
                    paragraph={
                        <div className="flex flex-col gap-4 text-gray-300">
                            <p>
                                At taxi thissamaharama, we believe that your journey through Sri Lanka should be as comfortable and
                                enjoyable as your destination itself. That&apos;s why we take immense pride in offering a
                                meticulously curated and diverse range of premium vehicles, all part of the exclusive
                                taxi thissamaharama fleet, designed to cater to every travel need and preference. Whether you&apos;re
                                exploring the cultural richness of Sri Lanka, venturing
                                into the historical sites, or embarking on a scenic island-wide adventure, taxi thissamaharama
                                ensures you travel in unparalleled comfort and style.
                            </p>
                            <p>
                                Each vehicle in our taxi thissamaharama fleet undergoes rigorous, regular maintenance checks to
                                guarantee the highest standards of safety, cleanliness, and reliability. From the moment
                                you step into a taxi thissamaharama vehicle, you&apos;&apos;ll experience the difference: air-conditioned
                                comfort, ample legroom, and modern amenities that transform your travel time into a
                                relaxing part of your holiday.
                            </p>
                            <h3 className="font-bold text-white">
                                Our premium taxi thissamaharama fleet includes:
                            </h3>
                            <ul className="list-disc pl-6 space-y-2 text-gray-300">
                                <li>
                                    <b className="text-white">Comfortable Sedans:</b> Perfect for solo travelers, couples, or small families
                                    seeking
                                    efficient and stylish transport for airport transfers, city tours, or inter-city
                                    travel with TakeMeLK.
                                </li>
                                <li>
                                    <b className="text-white">Spacious Vans:</b> Ideal for larger families, groups, or those requiring extra
                                    luggage
                                    space, ensuring everyone travels together comfortably and safely with TakeMeLK.
                                </li>
                                <li>
                                    <b className="text-white">Luxury Vehicles:</b> For those desiring an elevated travel experience, our
                                    executive
                                    cars provide superior comfort and sophistication for special occasions or business
                                    travel facilitated by TakeMeLK.
                                </li>
                            </ul>
                            <p>
                                When you choose TakeMeLK, you&apos;re not just booking a ride; you&apos;re selecting a promise of
                                quality, punctuality, and a truly enjoyable transportation experience across Sri Lanka.
                                Let TakeMeLK elevate your travel – explore our premium fleet and discover the perfect
                                vehicle for your next unforgettable Sri Lankan adventure.
                            </p>
                        </div>
                    }
                />

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {vehicles.map((vehicle, index) => (
                        <article
                            key={vehicle.id}
                            className="glass-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover hover-lift transition-all duration-500 animate-fade-in-luxury border border-white/10"
                            style={{animationDelay: `${index * 150}ms`}}
                        >
                            <div className="relative">
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={vehicle.image}
                                        alt={`${vehicle.name} - ${vehicle.passengerCapacity} passenger vehicle`}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                                </div>

                                {/* Vehicle capacity badge */}
                                <div
                                    className="absolute top-4 right-4 glass-premium rounded-full py-2 px-4 shadow-luxury flex items-center gap-2 border border-white/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-400"
                                         viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                              clipRule="evenodd"/>
                                    </svg>
                                    <span className="font-medium text-white">Max {vehicle.passengerCapacity}</span>
                                </div>

                                {/* Luxury accent bar */}
                                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-red-500 to-red-400"></div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-4 text-luxury">{vehicle.name}</h3>
                                <p className="text-gray-300 mb-6 leading-relaxed">{vehicle.description}</p>

                                <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-400">
                                        Air Conditioned • Well-maintained
                                    </span>
                                    <button
                                        onClick={() => {
                                            const heroSection = document.getElementById('hero');
                                            if (heroSection) {
                                                heroSection.scrollIntoView({behavior: 'smooth'});
                                            }
                                        }}
                                        className="px-6 py-3 glass-premium text-white rounded-lg border border-red-400/50 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 flex items-center gap-2 font-medium"
                                    >
                                        Book Now
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                                  d="M9 5l7 7-7 7"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button
                        onClick={() => {
                            const contactSection = document.getElementById('contact');
                            if (contactSection) {
                                contactSection.scrollIntoView({behavior: 'smooth'});
                            }
                        }}
                        className="px-10 py-4 gradient-accent text-white font-semibold rounded-xl hover:shadow-luxury-hover hover:scale-105 transition-all duration-300 inline-flex items-center animate-pulse-luxury text-lg"
                    >
                        Inquire About Our Fleet
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Fleet;