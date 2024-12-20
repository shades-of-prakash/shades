import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDark, setIsDark] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme !== null) {
            return storedTheme === "dark";
        }
        return window.matchMedia("(prefers-color-scheme: dark)").matches;
    });

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia(
            "(prefers-color-scheme: dark)"
        );

        const handleChange = (e) => {
            const newTheme = e.matches;
            setIsDark(newTheme);
            localStorage.setItem("theme", newTheme ? "dark" : "light");
        };

        darkModeMediaQuery.addEventListener("change", handleChange);

        return () => {
            darkModeMediaQuery.removeEventListener("change", handleChange);
        };
    }, []);

    const toggleTheme = () => {
        setIsDark((prev) => {
            const newTheme = !prev;
            localStorage.setItem("theme", newTheme ? "dark" : "light");
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ isDark, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
