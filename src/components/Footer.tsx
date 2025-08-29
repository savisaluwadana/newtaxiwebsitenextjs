import React from 'react';
import Link from "next/link";
import img from "@/assets/logo.png";
import Image from "next/image";

// import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <div className="w-full cursor-default p-8 pb-0 glass-card border-t border-white/10">
            <div className="flex md:flex-row flex-col gap-8 md:gap-16 p-8 justify-between items-center self-stretch">
                {/* Logo and Company Name */}
                <div className="flex flex-col items-center justify-center text-center">
                    <Image src={img.src} alt="taxi thissamaharama" width={80} height={80} className="hover-lift" />
                    <p className="text-white font-inter text-[1.2rem] font-semibold mt-4">
                        <span className="text-gradient font-bold">taxi thissamaharama</span>
                        <br/>
                        <span className="text-gray-300 text-lg">Taxi Tissamaharama</span>
                    </p>
                </div>

                {/* Description */}
                <p className="w-full md:w-[40%] text-gray-300 text-center font-inter text-[1rem] font-normal leading-relaxed">
                    Reliable, affordable, and always on time!<br/>
                    We provide safe and comfortable rides 24/7, whether
                    you need a quick city trip, airport transfer, or long-distance travel. Book your ride today and
                    experience hassle-free transportation with professional drivers and top-notch service. Your journey,
                    our priority!
                </p>

                {/* Contact Information */}
                <div className="flex flex-col gap-6 md:min-w-[300px]">
                    <div className="flex flex-col gap-4">
                        <div className="glass-premium p-4 rounded-lg border border-white/10">
                            <p className="text-white font-inter text-[0.9rem] font-medium">
                                <span className="text-red-400 font-semibold">Address:</span><br />
                                <span className="text-gray-300">1225, Vijithapura, 2 Govipola Mawatha<br/> Tissamaharama</span>
                            </p>
                        </div>
                        <div className="glass-premium p-4 rounded-lg border border-white/10">
                            <p className="text-white font-inter text-[0.9rem] font-medium">
                                <span className="text-red-400 font-semibold">Phone:</span><br />
                                <span className="text-gray-300">+94 77 765 6843</span>
                            </p>
                        </div>
                        <div className="glass-premium p-4 rounded-lg border border-white/10">
                            <p className="text-white font-inter text-[0.9rem] font-medium">
                                <span className="text-red-400 font-semibold">Email:</span><br />
                                <span className="text-gray-300">suranga.sudusinghe84@gmail.com</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="flex p-6 justify-center items-center self-stretch border-t border-white/10">
                <p className="text-gray-400 text-center font-inter text-[0.8rem] font-normal leading-normal">
                    All Rights Reserved | Developed by{' '}
                    <Link
                        href={"https://www.wrenix.com"}
                        className="text-red-400 hover:text-red-300 transition-colors duration-300 font-medium"
                    >
                        Wrenix
                    </Link>{' '}
                    2025
                </p>
            </div>
        </div>
    );
};

export default Footer;
