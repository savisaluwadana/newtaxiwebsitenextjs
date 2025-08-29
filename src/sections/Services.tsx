"use client";

import React, {useState} from 'react';
import TopSection from "@/components/TopSection";
import Image, {StaticImageData} from "next/image";
import ServiceModal from "@/components/ServiceModal";


import airPort from "/public/images/ariport.jpg";
import dayTours from "/public/images/daytours.jpg";
import longTours from "/public/images/long.webp";
import weddingCar from "/public/images/weddingcar.jpg";
import hotel from "/public/images/hotel.jpeg";

interface Service {
    id: number;
    title: string;
    description: string;
    image: StaticImageData;
    alt: string;
    detaildescription: string;
}

const Services: React.FC = () => {
    // Add state for modal visibility and selected service
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const services: Service[] = [
        {
            "id": 1,
            "title": "Airport Transfers",
            "description": "Need a reliable airport transfer in Sri Lanka? Don't risk missing your flight—travel stress-free with our punctual, comfortable taxi service.",
            "image": airPort,
            "alt": "Professional airport transfer service in Sri Lanka",
                "detaildescription": "Experience seamless and stress-free airport transfers across Sri Lanka with taxi thissamaharama. Whether you're arriving at Bandaranaike International Airport (BIA) or any other regional airport, our professional taxi service ensures you reach your destination punctually and comfortably. We monitor flight schedules to account for any delays, guaranteeing a driver is always waiting for you. Our fleet of well-maintained vehicles and experienced drivers provide a safe and efficient journey, perfect for both solo travelers and groups. Book your airport taxi in Sri Lanka with taxi thissamaharama for a reliable start or end to your trip."
        },
        {
            "id": 2,
            "title": "Day Tours",
            "description": "Explore breathtaking landscapes and authentic culture with personalized day tours from any major city in Sri Lanka, customized just for you.",
            "image": dayTours,
            "alt": "Customized day tours across Sri Lanka's beautiful destinations",
                "detaildescription": "Discover the vibrant beauty and rich culture of Sri Lanka with taxi thissamaharama's personalized day tours. Departing from major cities like Colombo, Kandy, Galle, or Negombo, our custom-tailored tours allow you to explore iconic landmarks, pristine beaches, ancient temples, and lush tea plantations. Whether you desire a wildlife safari in Yala, a historical exploration of Sigiriya, or a serene visit to the Temple of the Tooth, our knowledgeable drivers will guide you through unforgettable experiences. Enjoy the flexibility of a private taxi service, allowing you to set your own pace and truly immerse yourself in Sri Lanka's breathtaking landscapes and authentic local life. Book your Sri Lanka day tour with taxi thissamaharama for a truly unique adventure."
        },
        {
            "id": 3,
            "title": "Long Tours",
            "description": "Enjoy multi-day adventures with our affordable, all-inclusive tour packages that showcase iconic sights and hidden gems throughout Sri Lanka.",
            "image": longTours,
            "alt": "Comprehensive multi-day tours across Sri Lanka",
                "detaildescription": "Embark on an unforgettable multi-day adventure across Sri Lanka with taxi thissamaharama's comprehensive long tour packages. Our affordable and all-inclusive tours are designed to showcase the island's diverse beauty, from the cultural triangle's ancient wonders to the hill country's misty mountains and the southern coast's golden beaches. Explore hidden gems and iconic sights at your own pace, with comfortable transportation and experienced drivers who also serve as your local guides. Whether you're planning a week-long exploration of the entire island or a more focused multi-day itinerary, taxi thissamaharama offers flexible options to suit your interests and budget, ensuring a truly immersive and memorable Sri Lankan experience."
        },
        {
            "id": 4,
            "title": "Wedding Hires",
            "description": "Make your special day unforgettable with our luxury wedding vehicles—perfect for your wedding ride, honeymoon trip, or elegant homecoming.",
            "image": weddingCar,
            "alt": "Luxury wedding car hire services in Sri Lanka",
                "detaildescription": "Make your special day truly unforgettable with taxi thissamaharama's luxury wedding car hire services in Sri Lanka. We offer an exquisite fleet of premium vehicles, perfect for your grand entrance, elegant honeymoon trip, or stylish homecoming. Our professional chauffeurs are dedicated to providing impeccable service, ensuring you arrive in comfort and style. From classic sedans to spacious luxury vans, we cater to all your wedding transportation needs, adding a touch of sophistication to your celebrations. Trust taxi thissamaharama to handle your wedding day transport with the utmost care and professionalism, allowing you to focus on creating cherished memories."
        },
        {
            "id": 5,
            "title": "Hotel Transfers",
            "description": "Experience smooth, safe, and timely rides between hotels, airports, and attractions with our professional hotel transfer service.",
            "image": hotel,
            "alt": "Reliable hotel transfer service throughout Sri Lanka",
                "detaildescription": "Ensure seamless and comfortable travel between your accommodations, airports, and attractions with taxi thissamaharama's reliable hotel transfer service across Sri Lanka. Our professional taxi service provides punctual and safe transportation, taking the hassle out of navigating unfamiliar routes. Whether you need a ride from Bandaranaike International Airport (BIA) to your hotel in Colombo, a transfer between hotels in different cities, or a convenient pick-up for a day trip to a local attraction, taxi thissamaharama offers efficient and stress-free solutions. Our well-maintained vehicles and experienced drivers are committed to providing a superior travel experience, ensuring you reach your destination smoothly and on time."
        }
    ];

    // Function to open modal with selected service
    const openServiceModal = (service: Service) => {
        setSelectedService(service);
        setIsModalOpen(true);
        // Prevent body scrolling when modal is open
        document.body.style.overflow = 'hidden';
    };

    // Function to close modal
    const closeServiceModal = () => {
        setIsModalOpen(false);
        setSelectedService(null);
        // Re-enable body scrolling
        document.body.style.overflow = 'auto';
    };

    return (
        <section id="services" aria-label="Our Services" className="py-20 overflow-hidden relative">
            {/* Luxury background */}
            <div className="absolute inset-0 gradient-primary">
                <div className="absolute top-20 left-10 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-80 h-80 bg-red-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <TopSection
                    title={"Our Premium Services"}
                    description={"Discover our exceptional range of services designed to meet your every need, from seamless airport transfers to unforgettable tours and reliable hotel transfers."}
                    highlightWord="Services"
                    popupTitle="Our Premium TakeMeLK Services: Your Journey, Our Priority in Sri Lanka"
                    paragraph={
                        <div className="flex flex-col gap-4 text-gray-300">
                            <p>
                                Discover the exceptional range of services offered by TakeMeLK, meticulously designed to
                                cater to your every transportation need across Sri Lanka, particularly in and around
                                Colombo and the Western Province. At TakeMeLK, we go beyond just providing a
                                ride; we deliver a seamless, comfortable, and reliable travel experience that ensures
                                your journey is as enjoyable as your destination.
                            </p>
                            <h3 className="font-bold text-white">Seamless Airport Transfers with TakeMeLK</h3>
                            <p>
                                Begin and end your Sri Lankan adventure stress-free with TakeMeLK&apos;s premium airport
                                transfer services. We provide punctual and comfortable pickups and drop-offs to and from
                                all major airports in Sri Lanka, including Bandaranaike International Airport (CMB).
                                Trust TakeMeLK to handle your luggage and navigate traffic, ensuring you arrive on time
                                and in ultimate comfort.
                            </p>
                            <h3 className="font-bold text-white">Unforgettable Tours and Excursions with TakeMeLK</h3>
                            <p>
                                Explore the breathtaking beauty and rich cultural heritage of Sri Lanka with TakeMeLK&apos;s
                                expertly curated tour services. Whether you dream of visiting the ancient cities,
                                sprawling tea plantations, pristine beaches, or vibrant wildlife sanctuaries, TakeMeLK
                                connects you with experienced local drivers who know the island inside out. Customize
                                your itinerary or choose from our popular tour packages, all designed to offer you an
                                unforgettable exploration of Sri Lanka with the convenience and reliability of TakeMeLK.
                            </p>
                            <h3 className="font-bold text-white">Reliable Hotel Transfers by TakeMeLK</h3>
                            <p>
                                Ensuring smooth transitions between your accommodations is vital for a relaxing trip.
                                TakeMeLK offers reliable and comfortable hotel transfer services across Sri Lanka. From
                                your arrival at the airport to your hotel check-in, or moving between different hotels
                                during your stay, TakeMeLK provides prompt and efficient service, making sure you reach
                                your destination refreshed and ready to enjoy your stay.
                            </p>
                            <h3 className="font-bold text-white">Local and Inter-City Travel with TakeMeLK</h3>
                            <p>
                                Need to travel within Colombo, explore the Western Province, or commute between
                                cities across Sri Lanka? TakeMeLK is your trusted partner for all local and inter-city
                                travel needs. Our diverse fleet and professional drivers ensure you get to your
                                destination safely, comfortably, and on time, every time.
                            </p>
                            <p>
                                At TakeMeLK, your comfort, safety, and satisfaction are our top priorities. Experience
                                the difference of premium service with TakeMeLK on your next journey in Sri Lanka.
                            </p>
                        </div>
                    }
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {services.map((service, index) => (
                        <article
                            key={service.id}
                            className="glass-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-hover hover-lift flex flex-col h-full animate-fade-in-luxury border border-white/10"
                            style={{animationDelay: `${index * 150}ms`}}
                        >
                            <div className="relative h-56 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-red-500 to-red-400"></div>
                            </div>

                            <div className="p-8 flex flex-col flex-grow">
                                <h2 className="text-2xl font-bold mb-4 text-white text-luxury">
                                    {service.title}
                                </h2>
                                <p className="text-gray-300 mb-6 flex-grow leading-relaxed">
                                    {service.description}
                                </p>
                                <button
                                    className="mt-auto px-6 py-3 glass-premium text-white rounded-lg border border-red-400/50 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 flex items-center justify-center group font-medium"
                                    onClick={() => openServiceModal(service)}
                                >
                                    Learn More
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                              d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                                    </svg>
                                </button>
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
                        className="px-10 py-4 gradient-accent text-white font-semibold rounded-xl hover:shadow-luxury-hover hover:scale-105 transition-all duration-300 animate-pulse-luxury text-lg"
                    >
                        Book Your Service Now
                    </button>
                </div>
            </div>

            {/* Import and use the ServiceModal component */}
            {selectedService && (
                <ServiceModal
                    service={selectedService}
                    isOpen={isModalOpen}
                    onClose={closeServiceModal}
                />
            )}
        </section>
    );
};

export default Services;