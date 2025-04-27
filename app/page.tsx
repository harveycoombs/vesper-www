"use client";
import { motion } from "motion/react";

import Panel from "@/app/components/common/Panel";
import Button from "@/app/components/common/Button";
import Logo from "@/app/components/common/Logo";

export default function Home() {
    return (
        <main className="w-375 h-[calc(100vh-142px)] mx-auto grid place-items-center">
            <section className="w-full flex items-center gap-30">
                <div className="w-10/16 mb-5">
                    <h1 className="text-white text-[4rem] leading-22 font-semibold max-2xl:text-7xl max-2xl:leading-24 max-sm:text-6xl max-sm:leading-20">
                        <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="block">Who needs slash</motion.span></div>
                        <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="block">commands when you</motion.span></div>
                        <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="block">have Agentic <span className="grad-text">AI</span>?</motion.span></div>
                    </h1>

                    <div className="mt-6 leading-loose">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eum voluptatum,<br/>necessitatibus fuga similique libero, omnis, vel molestias molestiae ut fugit repudiandae.</div>
                </div>

                <div className="w-6/16 select-none">
                    <HeroImage url="/images/hero.png" x="8.3333%" classes="mb-8" />
                    <HeroImage url="/images/hero.png" delay={0.1} classes="mb-8" />
                    <HeroImage url="/images/hero.png" delay={0.2} x="8.3333%" />
                </div>
            </section>

            <section className="w-full h-76 flex gap-10">
                <Panel title="Streamline & Simplify" classes="w-1/2 relative overflow-hidden">
                    <p className="block my-3.5 text-sm font-medium leading-relaxed relative z-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit error molestias hic, ipsum sapiente aperiam blanditiis asperiores quae aliquid commodi ea praesentium exercitationem cupiditate repellendus ut quis magni voluptatibus omnis! Corporis, aut.</p>
                    <Button url="/about" classes="block w-fit relative z-10">Learn More</Button>

                    <Logo className="w-auto h-full opacity-20 absolute z-0 scale-150 top-0 -right-10" />
                </Panel>

                <Panel title="Join Our Discord" classes="w-1/2 relative overflow-hidden">
                    <div className="w-1/2 inline-block">
                        <p className="block my-3.5 text-sm font-medium leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat repudiandae quis assumenda.</p>
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
            className={`block w-11/12 h-auto rounded-xl ${classes.length ? classes : ""}`}
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