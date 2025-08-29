// Add this to your main layout file or a utility JavaScript file
export function setupConsoleProtection() {
    // Store the original console methods
    const originalConsole = {
        log: console.log,
        warn: console.warn,
        error: console.error,
        info: console.info,
        debug: console.debug,
        clear: console.clear,
    };

    // Custom message
    const warningMessage = "⚠️ This is a protected site. Debugging and command execution in this console is monitored.";

    // Override console methods
    console.log = console.info = console.warn = console.error = console.debug = function() {
        originalConsole.clear();
        originalConsole.log("%c" + warningMessage, "color:red; font-size:20px; font-weight:bold");
    };

    // Define detection methods
    const detectDevTools = () => {
        originalConsole.clear();
        originalConsole.log("%c" + warningMessage, "color:red; font-size:20px; font-weight:bold");
    };

    // Detection using size changes
    let devtoolsOpen = false;
    const threshold = 160;
    const checkDevTools = () => {
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        if (widthThreshold || heightThreshold) {
            if (!devtoolsOpen) {
                devtoolsOpen = true;
                detectDevTools();
            }
        } else {
            devtoolsOpen = false;
        }
    };

    // Set up listeners
    setInterval(checkDevTools, 1000);
    window.addEventListener('resize', checkDevTools);
    window.addEventListener('DOMContentLoaded', detectDevTools);
}