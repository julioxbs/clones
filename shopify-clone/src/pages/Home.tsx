import { useEffect } from "react";
import { Banner } from "../components/Home/Banner";
import { Community } from "../components/Home/Community";
import { Footer } from "../components/Home/Footer";
import { Hero } from "../components/Home/Hero";
import { useThemeContext } from "../context/ThemeContext";
import { ToggleTheme } from "../utils/LocalStorage";

export function Home() {
    const { setDarkMode } = useThemeContext();

    useEffect(() => {
        const isDark: boolean = JSON.parse(localStorage.getItem('darkTheme') ?? 'false');
        setDarkMode(isDark);
        ToggleTheme(isDark);
    }, [])

    return (
        <main className="dark:bg-[#0D1213] bg-white min-h-screen font-Inter">
            <Hero />
            <Banner />
            <Community />
            <Footer />
        </main>
    );
}