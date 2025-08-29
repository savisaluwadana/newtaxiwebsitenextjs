"use client";

import React from 'react';
import GoogleReviews from "@/components/GoogleReviews";
import TopSection from "@/components/TopSection";
import Image from "next/image";

const Reviews: React.FC = () => {
    return (
        <section id="reviews" className="py-20 relative overflow-hidden mx-auto">
            {/* Luxury background */}
            <div className="absolute inset-0 gradient-primary">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent"></div>
                <div className="absolute top-10 left-10 w-64 h-64 bg-red-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="mb-12">
                    <TopSection
                        title="What Our Clients Say"
                        description="Real stories from real travelers who experienced our exceptional service. See why our customers trust us for their transportation needs across Sri Lanka."
                        highlightWord="Clients"
                        popupTitle="What Our Clients Say About TakeMeLK: Trusted Transportation Across Sri Lanka"
                        paragraph={
                            <div className="flex flex-col gap-4 text-gray-300">
                                <p>
                                    At TakeMeLK, the voice of our clients is our greatest testament. This section shares
                                    real stories and authentic feedback from travelers just like you, who have
                                    experienced the unparalleled comfort, reliability, and professionalism of our
                                    transportation services across Sri Lanka. From seamless airport transfers to
                                    unforgettable island tours and reliable daily commutes within Sri Lanka, our
                                    customers consistently choose and trust TakeMeLK for all
                                    their travel needs.
                                </p>
                                <p>
                                    Discover firsthand why TakeMeLK stands out as the premier choice for safe,
                                    comfortable, and efficient transportation. Read testimonials highlighting our
                                    punctual drivers, meticulously maintained fleet, exceptional customer service, and
                                    the peace of mind that comes with traveling with TakeMeLK. These genuine reviews
                                    reflect our unwavering commitment to exceeding expectations and ensuring every
                                    journey with TakeMeLK is a positive and memorable one. Let their experiences guide
                                    you in making the smart choice for your next trip in Sri Lanka – choose TakeMeLK.
                                </p>
                            </div>
                        }
                    />
                </div>

                {/* Reviews Container */}
                <div className="glass-card max-w-sm md:max-w-full rounded-2xl shadow-luxury p-6 md:p-8 mb-12 relative border border-white/10">
                    {/* Luxury accent element */}
                    <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-red-500 to-red-400 rounded-full"></div>

                    {/* Premium quote icon */}
                    <div className="absolute top-4 right-8 z-10">
                        <svg className="w-16 h-16 text-red-400 opacity-20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24">
                            <path
                                d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                        </svg>
                    </div>

                    {/* Google Reviews Component */}
                    <GoogleReviews/>
                </div>

                {/* Luxury Call to Action */}
                <div className="text-center">
                    <div className="inline-flex items-center glass-premium rounded-full px-6 py-4 shadow-luxury hover:shadow-luxury-hover hover-lift transition-all duration-300 border border-white/20">
                        <Image
                            src="/svgs/google.svg"
                            alt="Google Reviews"
                            width={24}
                            height={24}
                            className="mr-3"
                        />
                        <a
                            href="https://g.page/r/CbxtOLj3BAX0EAI/review"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white font-medium hover:text-red-400 transition-colors duration-300"
                        >
                            Leave us a review on Google
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-3 text-gray-400" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;