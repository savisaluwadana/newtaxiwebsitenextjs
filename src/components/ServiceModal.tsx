"use client";

import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { StaticImageData }  from "next/image";

interface ServiceModalProps {
    service: {
        id: number;
        title: string;
        description: string;
        image: StaticImageData;
        alt: string;
        detaildescription: string;
    };
    isOpen: boolean;
    onClose: () => void;
}

const ServiceModal: React.FC<ServiceModalProps> = ({ service, isOpen, onClose }) => {
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if (!isOpen) {
            setIsClosing(false);
        }
    }, [isOpen]);

    const handleClose = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
        }, 300); // Match this with animation duration
    };

    if (!isOpen) return null;

    return (
        <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm ${isClosing ? 'animate-fade-out' : 'animate-fade-in'}`}>
            <div className={`relative glass-card rounded-2xl shadow-luxury max-w-2xl w-full max-h-[90vh] overflow-auto border border-white/10 ${isClosing ? 'animate-scale-out' : 'animate-scale-in'}`}>
                <button
                    className="absolute top-4 right-4 p-2 z-10 rounded-full glass-premium hover:bg-white/10 transition-all duration-300 border border-white/20"
                    onClick={handleClose}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="relative h-64">
                    <Image
                        src={service.image}
                        alt={service.alt}
                        fill
                        className="object-cover rounded-t-2xl"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-t-2xl"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h2 className="text-3xl font-bold text-white text-luxury">{service.title}</h2>
                    </div>
                </div>

                <div className="p-6">
                    <p className="text-gray-300 mb-4 leading-relaxed">{service.detaildescription}</p>

                    <div className="border-t border-white/10 pt-4 mt-4">
                        <h3 className="text-xl font-semibold mb-3 text-white">What&apos;s Included</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-300">Professional, experienced driver</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-300">Comfortable, air-conditioned vehicle</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-300">Complimentary bottled water</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="h-5 w-5 text-red-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-300">24/7 customer support</span>
                            </li>
                        </ul>
                    </div>

                    <div className="mt-6 flex justify-end">
                        <button
                            onClick={() => {
                                setIsClosing(true);
                                setTimeout(() => {
                                    onClose(); // Close the modal after animation
                                    // Scroll to the contact section
                                    const contactSection = document.getElementById('contact');
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }, 300);
                            }}
                            className="px-8 py-3 gradient-accent text-white font-semibold rounded-xl hover:shadow-luxury-hover hover:scale-105 transition-all duration-300 shadow-luxury"
                        >
                            Book This Service
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceModal;