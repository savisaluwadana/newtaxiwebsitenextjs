"use client";

import Hero from "@/sections/Hero";
import Services from "@/sections/Services";
import Fleet from "@/sections/Fleet";
import Reviews from "@/sections/Reviews";
import About from "@/sections/About";
import Contact from "@/sections/Contact";

export default function Home() {
    return (
        <div className="flex pb-[3.75rem] flex-col items-start gap-[4rem] overflow-x-hidden">
            <Hero />
            <About />
            <Services />
            <Reviews />
            <Fleet />
            <Contact />
        {/*    some comment. */}
        </div>
    );
}
