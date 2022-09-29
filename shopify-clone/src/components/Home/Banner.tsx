import Coin from "../../assets/images/coin-icon.png";
import Hearts from "../../assets/images/hearts-icon.png";
import AppsIcon from "../../assets/images/app-icon.png";

export function Banner() {
    return (
        <section>
            <div className="container mx-auto">
                <div className="dark:border-[0.125rem] py-16 px-8 grid lg:grid-cols-2 rounded-md dark:border-[#8CFB80] gap-16 items-center bg-[#EAFAF3] dark:bg-[#0D1213]">
                    <div className="flex flex-col gap-4">
                        <h2 className="titleLeading lg:text-[32px] text-[24px] font-medium leading-tight mb-4">Launch your app or theme to millions of merchants</h2>

                        <div className="flex flex-col gap-2">
                            <h3 className="titleLeading text-xl">App Store</h3>
                            <p className="pararaphStyle">Get your app in front of the right merchants. With personalized recommendations and multiple billing options, the Shopify App Store is where merchants go to find the apps their business needs most.</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h3 className="titleLeading text-xl">Theme Store</h3>
                            <p className="pararaphStyle">Sell your theme to merchants building their brands on the Shopify Theme Store, which offers flexible pricing and targeted merchandising.</p>
                        </div>
                    </div>

                    <div className="lg:justify-self-end">
                        <ul className="dark:bg-[#151D1E] lg:max-w-[400px] w-full dark:rounded-md dark:shadow-md lg:py-20 lg:px-16 py-10 px-8 dark:border-[#59767A] border-black dark:border border-4 flex flex-col gap-4 boxshadow">
                            <li className="flex items-center gap-4">
                                <img src={Coin} alt="coin icon" />

                                <div>
                                    <p className="titleLeading font-semibold">$12.5B USD</p>
                                    <span className="dark:text-[#D7D7D5] text-sm">Revenue generated from the Shopify ecosystem (2020)</span>
                                </div>
                            </li>

                            <li className="flex items-center gap-4">
                                <img src={Hearts} alt="icon with hearts" />
                                <p className="titleLeading font-semibold">3 in 4 merchants use apps</p>
                            </li>

                            <li className="flex items-center gap-4">
                                <img src={AppsIcon} alt="App icon" />
                                <p className="titleLeading font-semibold">Average number of apps installed per merchant</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}