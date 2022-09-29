import TwitterIcon from "../../assets/images/twitter-icon.svg";
import TwitchIcon from "../../assets/images/twitch-icon.svg";
import YoutubeIcon from "../../assets/images/youtube-icon.svg";

const Links = [
    {title: "News and updates", items: ["Developer changelog", "Shopify status"]},
    {title: "Blogs", items: ["Partner blog", "Engineening blog", "UX blog"]},
    {title: "Community", items: ["Developer forums", "Devs Discord", "Facebook group"]},
    {title: "Social", items: ["Twitch", "Youtube", "Twitter"], icons: [TwitchIcon, YoutubeIcon,TwitterIcon ]},
    {title: "Events", items: ["Unite", "Meetups", "Partner Town Hall"]},
    {title: "Legal", items: ["Terms of Service", "API Terms of Service", "Privacy policy", "Partner program agreement"]},
];

const bottomItems = ["About Shopify", "Shopify Plus", "Careers", "Investors", "Press and Media"];

export function Footer() {
    return (
        <footer className="p-4">
            <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 gap-3 bg-[#FAFBFB] dark:bg-[#151D1E] rounded-t-xl py-16 px-6">
                {Links.map((link, index) => (
                    <div key={index}>
                        <h3 className="titleLeading text-xs font-semibold mb-4">{link.title}</h3>
                        <ul className="flex flex-col gap-2">
                            {link.items.map((item, index) => (
                                <a key={index} href="#" className="itemFooter text-sm flex items-center gap-2">
                                    <img className={`w-4 ${link.icons ? "block" : "hidden"}`} src={link.icons?.[index]} alt={`${item} icon`} />
                                    <li>{item}</li>
                                </a>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="dark:bg-[#20292B] bg-[#F6F6F7] px-4 py-6 rounded-b-xl">
                <ul className="flex flex-wrap gap-4 lg:text-left text-center text-sm font-semibold">
                    {bottomItems.map((item, index) => (
                        <a key={index} href="#" className="text-[#8a8f93] hover:titleLeading">
                            <li>{item}</li>
                        </a>
                    ))}
                </ul>
            </div>
        </footer>
    );
}