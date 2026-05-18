"use client";

import { ThemeProvider } from "next-themes";

const ThemeProviders = ({ children }) => {
    return (
        <div>
            <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
                {children}
            </ThemeProvider>
        </div>
    );
};

export default ThemeProviders;
