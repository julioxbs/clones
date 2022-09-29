import { createContext, ReactNode, useContext, useState } from "react";

type ThemeProps = {
    darkMode: boolean;
    setDarkMode: (darkMode: boolean) => void;
}

const Theme = createContext({} as ThemeProps);

export function ThemeContext({ children }: {children?: ReactNode}) {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <Theme.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </Theme.Provider>
    )
}

export const useThemeContext = () => useContext(Theme);