"use client";

import React from 'react';
import Image from 'next/image';

import backgroundImage from '/public/images/hero_bg.jpeg';
import RideRequestForm from "@/components/RideRequestForm";

const Hero: React.FC = () => {
    return (
        <section id="hero" className="w-full flex pb-[1rem] justify-center min-h-[230vh] md:min-h-[150vh] mt-0 relative overflow-hidden">
            {/* Luxury background with gradient overlay */}
            <div className="absolute inset-0 gradient-primary">
                <Image
                    src={backgroundImage}
                    alt="Luxury automotive background"
                    fill
                    priority={false}
                    sizes="(max-width: 768px) 100vw, 90vw"
                    className="absolute pointer-events-none md:opacity-30 object-cover"
                    placeholder="blur"
                />
                {/* Premium overlay gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-red-900/20"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
            </div>

            <div className="relative z-10 pt-[12rem] md:pt-[14rem] px-[1rem] pb-[3rem] md:absolute gap-[2rem] md:gap-[15rem] flex md:flex-row flex-col w-full h-full md:p-[4rem] md:justify-between justify-center items-center flex-shrink-0">
                <div className="flex w-full md:w-[50%] flex-col items-center md:items-start flex-shrink-0 animate-fade-in-luxury">
                    <h1 className="text-center md:text-left text-[2.5rem] md:text-[4rem] text-white font-semibold leading-tight mb-6 text-luxury">
                        taxi thissamaharama Book a{' '}
                        <span className="text-gradient font-kalam text-[2.5rem] md:text-[4rem] font-bold leading-tight bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                            Ride
                        </span>{' '}
                        to your destination in Sri Lanka
                    </h1>

                    {/* Luxury tagline */}
                    <p className="text-gray-300 text-base md:text-xl text-center md:text-left mb-8 max-w-2xl leading-relaxed">
                        Experience premium transportation with our fleet of luxury vehicles.
                        Professional drivers, seamless journeys, unforgettable adventures.
                    </p>

                    {/* Premium CTA buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button
                            onClick={() => {
                                const contactSection = document.getElementById('contact');
                                if (contactSection) {
                                    contactSection.scrollIntoView({behavior: 'smooth'});
                                }
                            }}
                            className="px-8 py-4 gradient-accent text-white font-semibold rounded-xl hover:shadow-luxury-hover hover:scale-105 transition-all duration-300 animate-pulse-luxury shadow-luxury"
                        >
                            Book Your Luxury Ride
                        </button>
                        <button
                            onClick={() => {
                                const servicesSection = document.getElementById('services');
                                if (servicesSection) {
                                    servicesSection.scrollIntoView({behavior: 'smooth'});
                                }
                            }}
                            className="px-8 py-4 glass-premium text-white font-semibold rounded-xl border border-white/20 hover:border-red-400/50 hover:bg-white/10 transition-all duration-300 hover:shadow-luxury"
                        >
                            Explore Services
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center rounded-[1.875rem] shadow-luxury animate-slide-in-luxury mt-4 md:mt-0"
                     style={{animationDelay: "0.3s"}}>
                    <div className="glass-card p-4 md:p-8 rounded-[1.875rem] border border-white/10 w-full max-w-md relative z-30">
                        <RideRequestForm/>
                    </div>
                </div>
            </div>

            {/* Luxury floating elements */}
            <div className="absolute bottom-10 left-10 w-20 h-20 border border-red-400/30 rounded-full animate-pulse-luxury hidden md:block"></div>
            <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full animate-pulse-luxury hidden md:block" style={{animationDelay: "1s"}}></div>
        </section>
    );
};

export default Hero;