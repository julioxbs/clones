import HeroImage from "../../assets/images/hero-1.webp";
import HeroImageMobile from "../../assets/images/hero-mobile.png";
import HeroImageMobile2 from "../../assets/images/hero-mobile2.webp";
import HeroImageMobile3 from "../../assets/images/hero-mobile3.png";
import AppsIcon from "../../assets/images/apps-icon.png";
import ThemesIcon from "../../assets/images/theme-icon.png";
import Storefronts from "../../assets/images/store-icon.png";
import Marketstore from "../../assets/images/marketplace-icon.png";

const heroIcons = [
    { title: "Apps", image: AppsIcon },
    { title: "Themes", image: ThemesIcon },
    { title: "Storefronts", image: Storefronts },
    { title: "Marketstore", image: Marketstore },
]

export function Hero() {
    return (
        <section className="grid grid-cols-1 xl:grid-cols-2 md:gap-16 relative overflow-hidden">
            <div className="self-center order-1 xl:order-none flex flex-col gap-5 xl:px-10 xl:py-32 xl:mt-12">
                <div className="flex flex-col xl:px-0 px-4 lg:mt-0 mt-5 gap-6 mb-6">
                    <h1 className="titleLeading lg:text-5xl text-[32px] leading-tight">Build anything. Reimagine commerce.</h1>
                    <p className="pararaphStyle text-lg font-normal">
                        Millions of merchants trust Shopify to run their business—but they need developers to build the tools that help them achieve independence. Access powerful APIs to bring your ideas to life on the platform that makes commerce better for everyone.
                    </p>
                </div>

                <img className="xl:hidden block bg-cover w-full" src={HeroImageMobile2} alt="second hero image" />

                <div className="xl:px-0 px-4 flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <h2 className="titleLeading text-xl">Develop apps that solve complex merchant problems</h2>
                        <p className="pararaphStyle">Expansive <a href="#" className="underline text-[#B5BDE4]">GraphQL</a> and <a href="#" className="underline text-[#B5BDE4]">REST APIs</a> let you integrate into Shopify's admin, online store, checkout, and more.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="titleLeading text-xl">Integrate seamlessly into existing workflows</h2>
                        <p className="pararaphStyle">Embed your app’s features with <a href="#" className="underline text-[#B5BDE4]">App Bridge</a>. Create high quality experiences with the ready-to-build <a href="#" className="underline text-[#B5BDE4]">Polaris</a> component library.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="titleLeading text-xl">Help merchants express themselves</h2>
                        <p className="pararaphStyle">Use <a href="#" className="underline text-[#B5BDE4]">Liquid</a> to build beautiful theme templates. Get started with Dawn, our blazingly fast, accessible reference theme.</p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <h2 className="titleLeading text-xl">Ship custom shopping experiences</h2>
                        <p className="pararaphStyle">Add Shopify to any web, mobile, or gaming experience with the powerful <a href="#" className="underline text-[#B5BDE4]">Storefront API</a> and SDKs, plus any front-end stack you want. Use <a href="#" className="underline text-[#B5BDE4]">Marketplace Kit</a> to connect your platform and its users to millions of Shopify merchants and their products.</p>
                    </div>
                </div>

                <div className="xl:px-0 px-4 mb-5">
                    <h2 className="titleLeading text-xl mb-4">Start building:</h2>
                    <div className="grid lg:grid-cols-2 gap-4">
                        {heroIcons.map((icon, index) => (
                            <div className="heroiconsStyle" key={index}>
                                <img className="h-12 w-12" src={icon.image} alt={`${icon.title} icon`} />
                                <p>{icon.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                
                <img className="xl:hidden block bg-cover w-full mb-12" src={HeroImageMobile3} alt="third hero image" />
            </div>

            <picture className="min-w-[900px] lg:mt-12 relative">
                <img className="h-[1128px] w-full bg-cover xl:block hidden" src={HeroImage} alt="Hero image" />
                <img className="h-[364px] w-full xl:hidden bg-cover block" src={HeroImageMobile} alt="Hero image mobile" />
            </picture>
        </section>
    );
}