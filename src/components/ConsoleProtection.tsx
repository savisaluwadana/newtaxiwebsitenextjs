'use client'

import {useEffect} from 'react'

// Define proper console method types
type ConsoleMethod = (...args: unknown[]) => void;
type ConsoleMethods = Record<string, ConsoleMethod>;

export default function ConsoleProtection() {
    useEffect(() => {
        // We only want this to run in the browser, and not during server-side rendering
        if (typeof window === 'undefined') {
            return;
        }

        // --- STYLING AND CONTENT ---

        // A more modern and visually appealing ASCII art for the logo
        const asciiLogo = `
            __        __              _      _
            \\ \\      / / __ ___ _ __ (_)_  _| |
             \\ \\ /\\ / / '__/ _ \\ '_ \\| \\ \\/ / |
              \\ V  V /| | |  __/ | | | |>  <|_|
               \\_/\\_/ |_|  \\___|_| |_|_/_/\\_(_)
            `;

        // The main message content, using %c placeholders for styling
        const message = [
            `%c${asciiLogo}`, // ASCII logo style
            `%cHold Up, Developer!`, // Header style
            `%cThis console is a gateway to the inner workings of our application, protected with ❤️ by the Wrenix team.`, // Main text style
            `%cWhile you're welcome to explore, please be aware that all activity is monitored for security purposes.`, // Warning style
            `%c🚀 Interested in how we build things?`, // Call to action style
            `%c   Website: https://wrenix.com`, // Link style
            `%c   Careers: https://wrenix.com/careers` // Link style
        ].join('\n');

        // CSS styles for each part of the message. This is where the magic happens.
        const styles = [
            // Style for ASCII Logo
            'font-family: monospace; font-weight: bold; font-size: 14px; color: #93F0BD; text-shadow: 0 0 5px #93F0BD, 0 0 10px #93F0BD;',
            // Style for Header
            'font-size: 28px; font-weight: bold; color: #ffffff; background: linear-gradient(to right, #93F0BD, #4A5568); padding: 10px 20px; border-radius: 8px; margin-top: 10px;',
            // Style for Main Text
            'font-size: 16px; color: #A0AEC0; margin-top: 15px; margin-bottom: 5px;',
            // Style for Warning Text
            'font-size: 14px; color: #F56565; font-weight: bold; margin-bottom: 15px;',
            // Style for Call to Action
            'font-size: 16px; color: #E2E8F0; font-weight: bold;',
            // Style for Links
            'font-size: 14px; color: #93F0BD; text-decoration: underline; padding-left: 20px;',
            // Style for the second link (can be the same or different)
            'font-size: 14px; color: #93F0BD; text-decoration: underline; padding-left: 20px;'
        ];


        // --- CORE LOGIC ---

        // Store original console methods
        const originalConsole: ConsoleMethods = {};

        // Save original console methods before overriding
        Object.keys(console).forEach(method => {
            if (typeof console[method as keyof Console] === 'function') {
                originalConsole[method] = console[method as keyof Console] as ConsoleMethod;
            }
        });

        // The function that displays our custom message
        const showStyledMessage = () => {
            // Clearing the console first ensures our message is the only thing visible
            originalConsole.clear();
            originalConsole.log(message, ...styles);
        };

        // Define specific methods we want to override to avoid type issues
        const methodsToOverride = [
            'log', 'warn', 'error', 'info', 'debug',
            'table', 'trace', 'group', 'groupEnd', 'dir'
        ] as const;

        // Override only these specific methods
        methodsToOverride.forEach(method => {
            if (typeof originalConsole[method] === 'function') {
                // Use two-step type conversion to avoid TS2352 error
                (console as unknown as Record<string, ConsoleMethod>)[method] = function () {
                    showStyledMessage();
                };
            }
        });

        // --- DEVTOOLS DETECTION ---

        let devtoolsOpen = false;
        const threshold = 160;

        const checkDevTools = () => {
            const widthThreshold = window.outerWidth - window.innerWidth > threshold;
            const heightThreshold = window.outerHeight - window.innerHeight > threshold;

            if (widthThreshold || heightThreshold) {
                if (!devtoolsOpen) {
                    showStyledMessage();
                    devtoolsOpen = true;
                }
            } else {
                devtoolsOpen = false;
            }
        };

        // Set up listeners to detect when DevTools is opened.
        const interval = setInterval(checkDevTools, 1000);
        window.addEventListener('resize', checkDevTools);

        // Show the message once on initial load
        showStyledMessage();

        // --- CLEANUP ---
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', checkDevTools);
            // Restore the original console methods
            methodsToOverride.forEach(method => {
                // Use two-step type conversion to avoid TS2352 error
                (console as unknown as Record<string, ConsoleMethod>)[method] = originalConsole[method];
            });
        };
    }, []); // Empty dependency array ensures this runs only once on mount.

    return null; // This component does not render anything to the DOM.
}