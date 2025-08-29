'use client';

import React, { useState } from 'react';

interface ServiceProps {
    title: string;
    description: string;
    highlightWord?: string;
    popupTitle?: string;
    paragraph?: string | React.ReactNode;
}

const TopSection: React.FC<ServiceProps> = ({ title, description, highlightWord, popupTitle, paragraph }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Function to render title with highlighted word
    const renderTitle = () => {
        if (!highlightWord) return title;

        const words = title.split(' ');
        return words.map((word, index) =>
            word.toLowerCase() === highlightWord.toLowerCase() ?
                <span key={index} className="text-gradient font-bold">{word}</span> :
                <span key={index}>{word}{index < words.length - 1 ? ' ' : ''}</span>
        );
    };

    return (
        <section>
            <div className="flex md:p-[3.125rem_0.625rem] justify-center items-start self-stretch">
                <div className="flex md:p-[0rem_6.9375rem] flex-col justify-center items-center md:gap-[2rem] self-stretch">
                    <h2 className="text-white font-inter text-[3rem] md:text-[5rem] text-center text-normal font-semibold leading-tight text-luxury">
                        {renderTitle()}
                    </h2>
                    <p className="text-gray-300 font-inter text-[1.2rem] font-normal leading-relaxed text-center w-[80vw] md:w-[60vw]">
                        {description}
                    </p>

                    {/* Luxury Learn More button */}
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="mt-8 px-8 py-3 glass-premium text-white font-semibold rounded-xl border border-red-400/50 hover:border-red-400 hover:bg-red-400/10 transition-all duration-300 hover-lift"
                    >
                        Learn More
                    </button>
                </div>
            </div>

            {/* Luxury Popup/Modal */}
            {isPopupOpen && (
                <div className="fixed inset-0 glass-premium z-50 flex items-center justify-center p-4 animate-fade-in-luxury">
                    <div className="glass-card rounded-xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto shadow-luxury border border-white/10">
                        <div className="flex justify-between items-center mb-6">
                            <h3 className="text-xl md:text-2xl font-bold text-white text-luxury">{popupTitle || title}</h3>
                            <button
                                onClick={() => setIsPopupOpen(false)}
                                className="text-gray-400 hover:text-white transition-colors duration-300 p-2 hover:bg-white/10 rounded-lg"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="text-gray-300 leading-relaxed">
                            {typeof paragraph === 'string' ? (
                                <p>{paragraph || description}</p>
                            ) : (
                                <div>
                                    {paragraph || <p>{description}</p>}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default TopSection;