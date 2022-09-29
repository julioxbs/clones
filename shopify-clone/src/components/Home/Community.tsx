import CommunityIcon from "../../assets/images/communit-icon.png";
import ForumsIcon from "../../assets/images/forums-icon.png";
import SlackIcon from "../../assets/images/slack-icon.png";
import TwitterIcon from "../../assets/images/twitter-icon.png";
import ChangelogIcon from "../../assets/images/changelog-icon.png";
import MovieIcon from "../../assets/images/youtube-icon.png";
import DiscordIcon from "../../assets/images/discord-icon.png";
import ShopifyIcon from "../../assets/images/shopify-icon.png";
import { BiRightArrowAlt } from "react-icons/bi";

const communityInfo = [
    { title: "Developer forums", description: "Q&A and advice from Shopify community experts", image: ForumsIcon },
    { title: "#development on Slack", description: "Collaboration and connection with Shopify employees", image: SlackIcon },
    { title: "@ShopifyDevs on Twitter", description: "Product announcements, API updates, tips and more", image: TwitterIcon },
    { title: "Developer Changelog", description: "The latest Shopify ecosystem updates", image: ChangelogIcon },
    { title: "ShopifyDevs Youtube channel", description: "Tips and insights in dev and design", image: MovieIcon },
    { title: "ShopifyDevs Discord server", description: "Chat with other Shopify developers", image: DiscordIcon },
    { title: "Shopify Partners blog", description: "Educational resources and product previews", image: ShopifyIcon },
]

export function Community() {
    return (
        <section>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 container mx-auto pt-7 pb-16 lg:px-8 px-4">
                <div className="dark:border-2 rounded-md dark:border-[#9DB8F7] dark:bg-[#0D1213] bg-[#EAFAF3] p-4">
                    <img src={CommunityIcon} alt="community icon" />
                    <p className="text-xl titleLeading mt-2 font-semibold">Join a community of builders</p>
                </div>

                {communityInfo.map((info, index) => (
                    <a key={index} href="#" className="dark:bg-[#151D1E] border rounded-md p-4 hover:-translate-y-1 transition dark:shadow-elevationShadow2 dark:hover:shadow-elevationShadow4 shadow-elevationShadow1">
                        <img src={info.image} alt={`${info.title} icon`} />
                        <p className="flex items-center titleLeading my-2">{info.title} <BiRightArrowAlt size={"23px"} /></p>
                        <p className="pararaphStyle">{info.description}</p>
                    </a>
                ))}
            </div>
        </section>
    );
}