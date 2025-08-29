import React from 'react';

interface SectionHeadingProps {
    title: string;
    className?: string;
    accentColor?: string;
    headingSize?: 'sm' | 'md' | 'lg';
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
                                                           title,
                                                           className = "mb-6",
                                                           accentColor = "bg-gradient-to-b from-red-500 to-red-400",
                                                           headingSize = "md"
                                                       }) => {
    const fontSize = {
        sm: "text-xl",
        md: "text-2xl",
        lg: "text-3xl"
    };

    return (
        <div className={`relative h-14 flex items-center ${className}`}>
            <div className={`absolute left-0 top-0 h-14 w-1 ${accentColor} rounded-full`}></div>
            <h3 className={`${fontSize[headingSize]} font-bold text-white pl-4 text-luxury`}>{title}</h3>
        </div>
    );
};

export default SectionHeading;