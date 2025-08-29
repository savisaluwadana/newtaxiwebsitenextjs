"use client";

import React, {FormEvent, useState} from 'react';
import TopSection from "@/components/TopSection";
import SectionHeading from "@/components/SectionHeading";

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        // Format the message for WhatsApp
        const message = `*New Message from Website*
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone}
*Service:* ${formData.service}
*Message:* ${formData.message}`;

        // Format phone number for WhatsApp API (removing spaces)
        const phoneNumber = "+94777656843"; // +94 77 765 6843 formatted for WhatsApp

        // Create WhatsApp URL
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden mx-auto">
            {/* Luxury background */}
            <div className="absolute inset-0 gradient-primary">
                <div className="absolute top-10 right-10 w-72 h-72 bg-red-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-72 h-72 bg-red-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 md:px-48 relative z-10">
                <TopSection
                    title="Contact Taxi Tissamaharama"
                    description="Ready to book a ride or have questions about our services? Reach out to us today and experience our exceptional customer service."
                    highlightWord="Contact"
                    popupTitle="Get in Touch with Taxi Tissamaharama for Seamless Travel"
                    paragraph="Whether you're planning an airport transfer, an inter-city trip, a scenic tour, or simply need dependable daily transportation, the Taxi Tissamaharama team is here to help. Contacting Taxi Tissamaharama is the first step towards a stress-free and enjoyable journey throughout Sri Lanka. Experience the convenience and professionalism that sets Taxi Tissamaharama apart. We look forward to hearing from you and helping you plan your perfect travel experience."
                />

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Contact Information */}
                    <div className="glass-card rounded-2xl shadow-luxury p-8 lg:col-span-2 animate-fade-in-luxury border border-white/10">
                        <SectionHeading title="Get In Touch" className="text-white mb-6"/>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="glass-premium p-3 rounded-lg mr-4 border border-red-400/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                                    <a href="tel:+94770000000"
                                       className="text-gray-300 hover:text-red-400 transition-colors duration-300">+94 77 765
                                        6843</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="glass-premium p-3 rounded-lg mr-4 border border-red-400/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                                    <a href="mailto:info@yourdomain.com"
                                       className="text-gray-300 hover:text-red-400 transition-colors duration-300">suranga.sudusinghe84@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="glass-premium p-3 rounded-lg mr-4 border border-red-400/20">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                                    <p className="text-gray-300">1225, Vijithapura, 2 Govipola
                                        Mawatha<br/> Tissamaharama, Sri Lanka</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card rounded-2xl shadow-luxury p-6 lg:col-span-3 animate-slide-in-luxury border border-white/10"
                         style={{animationDelay: "200ms"}}>
                        <SectionHeading title="Send Us a Message" className="text-white mb-6"/>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full
                                        Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        autoComplete="name"
                                        className="w-full px-4 py-3 glass-premium rounded-lg border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 outline-none"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email
                                        Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="youremail@example.com"
                                        autoComplete="email"
                                        className="w-full px-4 py-3 glass-premium rounded-lg border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 outline-none"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Phone
                                    Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="Your phone number"
                                    autoComplete="tel"
                                    className="w-full px-4 py-3 glass-premium rounded-lg border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 outline-none"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">Service
                                    Interested In</label>
                                <select
                                    id="service"
                                    name="service"
                                    autoComplete="off"
                                    className="w-full px-4 py-3 glass-premium rounded-lg border border-white/20 text-white focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 outline-none"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                >
                                    <option value="" className="bg-gray-800">Select a service</option>
                                    <option value="airport-transfer" className="bg-gray-800">Airport Transfer</option>
                                    <option value="day-tour" className="bg-gray-800">Day Tour</option>
                                    <option value="long-tour" className="bg-gray-800">Long Tour</option>
                                    <option value="wedding-hire" className="bg-gray-800">Wedding Car Hire</option>
                                    <option value="hotel-transfer" className="bg-gray-800">Hotel Transfer</option>
                                    <option value="vehicle-inquire" className="bg-gray-800">Vehicle Inquire</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Your
                                    Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell us about your requirements"
                                    autoComplete="off"
                                    className="w-full px-4 py-3 glass-premium rounded-lg border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 outline-none"
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-4 gradient-accent text-white font-semibold rounded-xl hover:shadow-luxury-hover hover:scale-105 transition-all duration-300 flex items-center justify-center animate-pulse-luxury"
                                >
                                    Send Message via WhatsApp
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;