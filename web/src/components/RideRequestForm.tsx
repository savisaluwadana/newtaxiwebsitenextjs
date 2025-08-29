"use client";

import React, { useState, useEffect, useRef } from 'react';
import dayjs from "dayjs";
import pricingData from "../../public/pricing.json";
import { sendMessage, sendRideMessage } from "@/components/utils/messageUtils"

type VehicleType = "mini_car" | "sedan" | "kdh" | "kdh_high_roof";

export default function BookingTabs() {
    const [activeTab, setActiveTab] = useState<string>("Book a Ride");
    const [isAnimating, setIsAnimating] = useState<boolean>(false);
    const formContainerRef = useRef<HTMLDivElement>(null);

    const [destinations, setDestinations] = useState<{ id: number; destination: string }[]>([]);
    const [pickups, setPickups] = useState<{ id: number; pickup: string }[]>([]);
    const [pickUpDestination, setPickUpDestination] = useState<string>("");
    const [selectedDestination, setSelectedDestination] = useState<string>("");
    const [selectedVehicle, setSelectedVehicle] = useState<VehicleType | "">("");
    const [totalPrice, setTotalPrice] = useState<number>(0);
    const [pickUpDate, setPickUpDate] = useState<string>(dayjs().format("YYYY-MM-DD"));
    const [pickUpHour, setPickUpHour] = useState<string>(dayjs().format("HH"));
    const [pickUpMinute, setPickUpMinute] = useState<string>(dayjs().format("mm"));
    const [customMessage, setCustomMessage] = useState<string>("");

    // Handle tab changing with animation
    const handleTabChange = (tab: string) => {
        if (tab !== activeTab) {
            setIsAnimating(true);
            setTimeout(() => {
                setActiveTab(tab);
                setIsAnimating(false);
            }, 300);
        }
    };

    // Adjust container height after content changes
    useEffect(() => {
        if (formContainerRef.current) {
            formContainerRef.current.style.height = `${formContainerRef.current.scrollHeight}px`;
        }
    }, [activeTab, isAnimating]);

    useEffect(() => {
        const uniqueDestinations = Array.from(
            new Set(pricingData.map((item) => item.destination))
        ).map(destination => {
            return pricingData.find(item => item.destination === destination);
        }).filter(item => item !== undefined)
            .sort((a, b) => {
                if (a && b) {
                    return a.destination.localeCompare(b.destination);
                }
                return 0;
            });
        setDestinations(uniqueDestinations as { id: number; destination: string }[]);
    }, []);

    useEffect(() => {
        const uniquePickups = pricingData.reduce((acc, item) => {
            if (!acc.some(pickup => pickup.pickup === item.pickup)) {
                acc.push({ id: item.id, pickup: item.pickup });
            }
            return acc;
        }, [] as { id: number; pickup: string }[]);
        setPickups(uniquePickups);
    }, []);

    useEffect(() => {
        if (selectedDestination && selectedVehicle) {
            const selectedPricing = pricingData.find(
                (item) => item.destination === selectedDestination
            );
            if (selectedPricing) {
                setTotalPrice(selectedPricing[selectedVehicle as VehicleType]);
            }
        } else {
            setTotalPrice(0);
        }
    }, [selectedDestination, selectedVehicle]);

    const tabs: string[] = ["Book a Ride", "Book a Trip", "Custom Request"];

    return (
        <div className="max-w-md mx-auto p-4 md:p-6 glass-card border border-white/10 rounded-[1.875rem] shadow-luxury transition-all duration-500 hover:shadow-luxury-hover">
            <div className="flex justify-around mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 relative overflow-hidden ${
                            activeTab === tab
                                ? "gradient-accent text-white shadow-luxury"
                                : "text-gray-300 hover:text-white hover:bg-white/10"
                        }`}
                        onClick={() => handleTabChange(tab)}
                    >
                        {tab}
                        {activeTab === tab && (
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-red-400 to-red-600 animate-pulse"></div>
                        )}
                    </button>
                ))}
            </div>

            <div ref={formContainerRef} className="form-container overflow-hidden">
                {activeTab === "Book a Ride" && (
                    <div className={isAnimating ? "form-animate-out" : "form-animate-in"}>
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="pickUpDestination" className="block mb-2 font-medium text-gray-300">
                                    Pickup Destination
                                </label>
                                <select
                                    id="pickUpDestination"
                                    name="pickUpDestination"
                                    className="w-full glass-premium border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 hover:border-white/30"
                                    value={pickUpDestination}
                                    onChange={(e) => setPickUpDestination(e.target.value)}>
                                    <option value="" className="bg-gray-800">Select Destination</option>
                                    {pickups.map((pickup) => (
                                        <option key={pickup.id} value={pickup.pickup} className="bg-gray-800">{pickup.pickup}</option>))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="selectedDestination" className="block mb-2 font-medium text-gray-300">
                                    Drop Destination
                                </label>
                                <select
                                    id="selectedDestination"
                                    name="selectedDestination"
                                    className="w-full glass-premium border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 hover:border-white/30"
                                    value={selectedDestination}
                                    onChange={(e) => setSelectedDestination(e.target.value)}
                                >
                                    <option value="" className="bg-gray-800">Select Destination</option>
                                    {destinations.map((destination) => (
                                        <option key={destination.id} value={destination.destination} className="bg-gray-800">
                                            {destination.destination}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="pickUpDate" className="block mb-2 font-medium text-gray-300">
                                    Pick-Up Date
                                </label>
                                <input
                                    id="pickUpDate"
                                    name="pickUpDate"
                                    type="date"
                                    className="w-full glass-premium border border-white/20 rounded-lg p-3 text-white focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 hover:border-white/30"
                                    required
                                    value={pickUpDate}
                                    onChange={(e) => setPickUpDate(e.target.value)}
                                />
                            </div>

                            <div>
                                <label htmlFor="pickUpHour" className="block mb-2 font-medium text-gray-300">
                                    Pick-Up Time (24-hr format)
                                </label>
                                <div className="flex space-x-3">
                                    <input
                                        id="pickUpHour"
                                        name="pickUpHour"
                                        type="number"
                                        min="0"
                                        max="23"
                                        placeholder="00"
                                        className="w-1/2 glass-premium border border-white/20 rounded-lg p-3 text-white text-center placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 hover:border-white/30"
                                        required
                                        value={pickUpHour}
                                        onChange={(e) => setPickUpHour(e.target.value)}
                                    />
                                    <input
                                        id="pickUpMinute"
                                        name="pickUpMinute"
                                        type="number"
                                        min="0"
                                        max="59"
                                        placeholder="00"
                                        className="w-1/2 glass-premium border border-white/20 rounded-lg p-3 text-white text-center placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 hover:border-white/30"
                                        value={pickUpMinute || "00"}
                                        onChange={(e) => setPickUpMinute(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="selectedVehicle" className="block mb-2 font-medium text-gray-300">
                                    Vehicle
                                </label>
                                <select
                                    id="selectedVehicle"
                                    name="selectedVehicle"
                                    className="w-full glass-premium border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 hover:border-white/30"
                                    value={selectedVehicle}
                                    onChange={(e) => setSelectedVehicle(e.target.value as VehicleType)}
                                >
                                    <option value="" className="bg-gray-800">Select Vehicle</option>
                                    <option value="mini_car" className="bg-gray-800">Mini Car</option>
                                    <option value="sedan" className="bg-gray-800">Sedan</option>
                                    <option value="kdh" className="bg-gray-800">KDH</option>
                                    <option value="kdh_high_roof" className="bg-gray-800">KDH High Roof</option>
                                </select>
                            </div>

                            <div className="flex justify-between items-center font-semibold text-lg p-4 glass-premium rounded-lg border border-white/10 shadow-luxury">
                                <span className="text-white">Total Price</span>
                                <span className="text-red-400 font-bold text-xl">LKR {totalPrice.toFixed(2)}</span>
                            </div>

                            <button
                                type="button"
                                className="w-full gradient-accent text-white py-4 rounded-xl font-semibold hover:shadow-luxury-hover hover:scale-105 transition-all duration-300 animate-pulse-luxury shadow-luxury relative overflow-hidden group"
                                onClick={() => {
                                    if (selectedDestination && selectedVehicle && pickUpDate && pickUpHour && pickUpMinute) {
                                        const pickUpTime = `${pickUpHour}:${pickUpMinute}`;
                                        sendRideMessage(pickUpDestination, selectedDestination, selectedVehicle, totalPrice, pickUpDate, pickUpTime);
                                    } else {
                                        alert("Please fill in all required fields.");
                                    }
                                }}
                            >
                                <span className="relative z-10">Reserve Now</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === "Book a Trip" && (
                    <div className={isAnimating ? "form-animate-out" : "form-animate-in"}>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="tripRequestMessage" className="block mb-2 font-medium text-gray-300">
                                    Explain your Need, we will help you
                                </label>
                                <textarea
                                    id="tripRequestMessage"
                                    name="tripRequestMessage"
                                    className="w-full glass-premium border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 hover:border-white/30 resize-none"
                                    rows={4}
                                    placeholder="Write your trip request here..."
                                    value={customMessage}
                                    onChange={(e) => setCustomMessage(e.target.value)}
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full gradient-accent text-white py-4 rounded-xl font-semibold hover:shadow-luxury-hover hover:scale-105 transition-all duration-300 animate-pulse-luxury shadow-luxury relative overflow-hidden group"
                                onClick={() => {
                                    if (customMessage) {
                                        sendMessage(customMessage);
                                    } else {
                                        alert("Please write a message.");
                                    }
                                }}
                            >
                                <span className="relative z-10">Reserve Now</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </form>
                    </div>
                )}

                {activeTab === "Custom Request" && (
                    <div className={isAnimating ? "form-animate-out" : "form-animate-in"}>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="customRequestMessage" className="block mb-2 font-medium text-gray-300">
                                    Custom Message
                                </label>
                                <textarea
                                    id="customRequestMessage"
                                    name="customRequestMessage"
                                    className="w-full glass-premium border border-white/20 rounded-lg p-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-red-400 focus:border-red-400 transition-all duration-300 hover:border-white/30 resize-none"
                                    rows={4}
                                    placeholder="Write your custom request here..."
                                    value={customMessage}
                                    onChange={(e) => setCustomMessage(e.target.value)}
                                />
                            </div>
                            <button
                                type="button"
                                className="w-full gradient-accent text-white py-4 rounded-xl font-semibold hover:shadow-luxury-hover hover:scale-105 transition-all duration-300 animate-pulse-luxury shadow-luxury relative overflow-hidden group"
                                onClick={() => {
                                    if (customMessage) {
                                        sendMessage(customMessage);
                                    } else {
                                        alert("Please write a message.");
                                    }
                                }}
                            >
                                <span className="relative z-10">Reserve Now</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}