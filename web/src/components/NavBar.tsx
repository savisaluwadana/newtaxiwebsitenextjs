"use client";

import React, {useEffect, useState} from "react";
import Image from "next/image";
import img from "@/assets/logo.png";

const NavBar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Handle scrolling effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Handle smooth scrolling
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        setIsMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({behavior: 'smooth'});
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'glass-premium shadow-luxury py-3 backdrop-blur-xl'
                    : 'bg-transparent py-4'
            }`}>
            <div className="container mx-auto flex w-full px-6 justify-between items-center">
                <Image
                    src={img.src}
                    alt="taxi thissamaharamaLK"
                    width={60}
                    height={60}
                    className="hover-lift transition-transform duration-300"
                />

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#hero"
                       onClick={(e) => scrollToSection(e, 'hero')}
                       className="text-white font-inter text-[1rem] hover:text-red-400 transition-all duration-300 relative group">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#services"
                       onClick={(e) => scrollToSection(e, 'services')}
                       className="text-white font-inter text-[1rem] hover:text-red-400 transition-all duration-300 relative group">
                        Our Services
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#fleet"
                       onClick={(e) => scrollToSection(e, 'fleet')}
                       className="text-white font-inter text-[1rem] hover:text-red-400 transition-all duration-300 relative group">
                        Our Fleet
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#reviews"
                       onClick={(e) => scrollToSection(e, 'reviews')}
                       className="text-white font-inter text-[1rem] hover:text-red-400 transition-all duration-300 relative group">
                        Reviews
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#contact"
                       onClick={(e) => scrollToSection(e, 'contact')}
                       className="text-white font-inter text-[1rem] hover:text-red-400 transition-all duration-300 relative group">
                        Contact Us
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#hero"
                       onClick={(e) => scrollToSection(e, 'hero')}
                       className="flex p-[0.6rem_1rem] justify-center items-center rounded-[0.625rem] gradient-accent text-white text-[1rem] hover:shadow-luxury-hover hover:scale-105 transition-all duration-300 font-medium shadow-luxury">
                        Book A Ride
                    </a>
                </div>

                {/* Mobile Hamburger Button */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-10 h-10 relative focus:outline-none hover-lift p-2 rounded-lg"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span
                        className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span
                        className={`block w-6 h-0.5 bg-white mt-1.5 transition-opacity duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span
                        className={`block w-6 h-0.5 bg-white mt-1.5 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 glass-premium z-40 pt-28 px-6 md:hidden transform transition-all duration-500 ease-in-out backdrop-blur-xl ${
                    isMenuOpen
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-full opacity-0'
                }`}>
                <div className="flex flex-col space-y-6">
                    <a href="#hero"
                       onClick={(e) => scrollToSection(e, 'hero')}
                       className="text-white text-xl py-3 border-b border-white/20 hover:text-red-400 transition-colors duration-300 relative group">
                        Home
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#services"
                       onClick={(e) => scrollToSection(e, 'services')}
                       className="text-white text-xl py-3 border-b border-white/20 hover:text-red-400 transition-colors duration-300 relative group">
                        Our Services
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#fleet"
                       onClick={(e) => scrollToSection(e, 'fleet')}
                       className="text-white text-xl py-3 border-b border-white/20 hover:text-red-400 transition-colors duration-300 relative group">
                        Our Fleet
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#reviews"
                       onClick={(e) => scrollToSection(e, 'reviews')}
                       className="text-white text-xl py-3 border-b border-white/20 hover:text-red-400 transition-colors duration-300 relative group">
                        Reviews
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#contact"
                       onClick={(e) => scrollToSection(e, 'contact')}
                       className="text-white text-xl py-3 border-b border-white/20 hover:text-red-400 transition-colors duration-300 relative group">
                        Contact Us
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-400 group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a href="#hero"
                       onClick={(e) => scrollToSection(e, 'hero')}
                       className="flex p-4 justify-center items-center rounded-lg gradient-accent text-white text-xl mt-4 hover:shadow-luxury-hover hover:scale-105 transition-all duration-300 font-medium shadow-luxury">
                        Book A Ride
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;