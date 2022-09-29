import ShopifyLogo from "../assets/images/shopify-logo.svg";
import ShopifyLogoDark from "../assets/images/shopify-logo-light.svg";
import { useThemeContext } from "../context/ThemeContext";
import { BiSearchAlt2, BiSun, BiMoon } from "react-icons/bi";
import { SaveToLocal, ToggleTheme } from "../utils/LocalStorage";
import { DrawerMenu } from "./Drawer";

export function Navbar() {
    const { darkMode, setDarkMode } = useThemeContext();

    function changeTheme() {
        setDarkMode(!darkMode);
        SaveToLocal(!darkMode);
        ToggleTheme(!darkMode);
    }

    return (
        <nav className="shadow-md text-sm dark:font-medium tracking-[.025em] dark:bg-[#0D1213] fixed left-0 top-0 right-0 z-50 bg-white">
            <div className="container px-4 mx-auto flex items-center justify-between">
                <ul className="flex items-center gap-4 py-3">
                    <a href="#" className="lg:hidden block"><DrawerMenu isDark={darkMode} /></a>
                    <a href="#"><li><img src={darkMode ? ShopifyLogo : ShopifyLogoDark} alt="shopify logo" /></li></a>
                    <a href="#" className="itemNavigation"><li>Apps</li></a>
                    <a href="#" className="itemNavigation"><li>Themes</li></a>
                    <a href="#" className="itemNavigation"><li>Custom storefronts</li></a>
                    <a href="#" className="itemNavigation"><li>Marketplaces</li></a>
                    <a href="#" className="itemNavigation"><li>APIs and references</li></a>
                </ul>

                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 p-1 rounded-md dark:bg-[#151D1E] dark:border-[#59767A] border-[#5C5F62] border">
                        <BiSearchAlt2 size={'18px'} color={'#5C5F62'} />
                        <input type="text" placeholder="Search" className="bg-transparent w-16 outline-none placeholder:text-[#5C5F62]" />
                    </div>

                    <div className="flex items-center gap-4">
                        <button onClick={changeTheme}>
                            {darkMode ? <BiSun size={'20px'} color={'#EBAF26'} /> : <BiMoon size={'20px'} color={'#6D7175'} />}
                        </button>
                        <button className="itemNavigation">Log in</button>
                        <button className="itemNavigation">Sign up</button>
                    </div>
                </div>
            </div>
        </nav>
    );
}