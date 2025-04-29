"use client";
import { motion } from "motion/react";

import Panel from "@/app/components/common/Panel";
import Button from "@/app/components/common/Button";
import Logo from "@/app/components/common/Logo";

export default function Home() {
    return (
        <main className="w-375 min-h-[calc(100vh-142px)] mx-auto grid place-items-center max-2xl:w-300 max-xl:w-full max-xl:px-5 max-md:min-h-[calc(100vh-170px)]">
            <section className="w-full flex items-center gap-30 max-xl:gap-10">
                <div className="w-10/16 mb-5 max-xl:w-9/16 max-lg:w-1/2 max-md:w-full">
                    <h1 className="text-white text-[4rem] leading-22 font-semibold max-2xl:text-6xl max-2xl:leading-20 max-xl:text-[3.2rem] max-xl:leading-18 max-lg:text-[2.6rem] max-lg:leading-16 max-md:text-5xl max-md:leading-18 max-md:text-center">
                        <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="block">Who needs slash</motion.span></div>
                        <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="block">commands when you</motion.span></div>
                        <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="block">have Agentic <span className="grad-text">AI</span>?</motion.span></div>
                    </h1>

                    <div className="mt-6 leading-loose max-xl:text-sm max-xl:font-medium max-xl:leading-6 max-md:text-center max-md:leading-relaxed max-md:text-base">Vesper is an agentic AI Discord bot designed with effortless automation in mind.</div>
                </div>

                <div className="w-6/16 select-none max-xl:w-7/16 max-lg:w-1/2 max-md:hidden">
                    <HeroImage url="/images/hero.png" x="8.3333%" classes="mb-8 max-2xl:mb-5" />
                    <HeroImage url="/images/hero.png" delay={0.1} classes="mb-8 max-2xl:mb-5" />
                    <HeroImage url="/images/hero.png" delay={0.2} x="8.3333%" />
                </div>
            </section>

            <section className="w-full h-76 flex gap-10 max-md:flex-col max-md:gap-5 max-md:h-auto">
                <Panel title="Streamline & Simplify" classes="w-1/2 relative overflow-hidden shadow-md max-md:w-full">
                    <p className="block my-3.5 text-sm font-medium leading-relaxed relative z-10">Whether its moderation, channel management, role assignment or even just conversational participation, Vesper is the ideal assistant for your server.</p>
                    <Button url="/about" classes="block w-fit relative z-10">Learn More</Button>

                    <Logo className="w-auto h-full opacity-20 absolute z-0 scale-150 top-0 -right-10" />
                </Panel>

                <Panel title="Join Our Discord" classes="w-1/2 relative overflow-hidden shadow-md max-md:w-full">
                    <div className="w-1/2 inline-block">
                        <p className="block my-3.5 text-sm font-medium leading-relaxed">Feel free to join the official Vesper Discord server for updates, support and interaction with the community.</p>
                        <Button url="https://discord.gg/aF4EctqgPS" target="_blank" rel="noopener noreferrer" classes="block w-fit" background="bg-[#5865F5]">Join Server</Button>
                    </div>

                    <div className="w-7/16 h-full absolute top-0 right-0">
                        <div className="relative w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#131B29] to-transparent z-10"></div>
                            <img src="/images/server.png" alt="Discord" className="object-cover w-full h-full z-0" />
                        </div>
                    </div>
                </Panel>
            </section>
        </main>
    );
}

function HeroImage({ url, delay = 0, x = "0", classes = "" }: any) {
    return (
        <motion.img 
            src={url} 
            alt="Hero" 
            className={`block w-11/12 h-auto rounded-xl shadow-md ${classes.length ? classes : ""}`}
            initial={{ x: "100%" }}
            animate={{ x }}
            transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 12,
                delay: delay
            }}
            draggable={false}
        />
    );
}