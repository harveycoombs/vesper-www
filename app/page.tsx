"use client";
import { motion } from "motion/react";

export default function Home() {
    return (
        <main className="w-375 mx-auto">
            <section className="flex items-center gap-30">
                <div className="w-10/16 mb-5">
                    <h1 className="text-white text-[4rem] leading-22 font-semibold max-2xl:text-7xl max-2xl:leading-24 max-sm:text-6xl max-sm:leading-20">
                        <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="block">Who needs slash</motion.span></div>
                        <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="block">commands when you</motion.span></div>
                        <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="block">have Agentic <span className="grad-text">AI</span>?</motion.span></div>
                    </h1>

                    <div className="mt-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam eum voluptatum, necessitatibus fuga similique libero, omnis, vel molestias molestiae ut fugit repudiandae.</div>
                </div>

                <div className="w-6/16">
                    <HeroImage url="/images/hero.png" delay={0} classes="mb-8" />
                    <HeroImage url="/images/hero.png" delay={0.1} classes="mb-8" />
                    <HeroImage url="/images/hero.png" delay={0.2} />
                </div>
            </section>
        </main>
    );
}

function HeroImage({ url, delay, classes }: any) {
    return (
        <motion.img 
            src={url} 
            alt="Hero" 
            className={`block w-11/12 h-auto rounded-xl ml-auto ${classes?.length ? classes : ""}`}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 12,
                delay: delay
            }}
        />
    );
}