"use client";
import { motion } from "motion/react";

import Button from "@/app/components/common/Button";

export default function Home() {
    return (
        <main className="w-250 min-h-[calc(100vh-138px)] mx-auto grid place-items-center max-lg:w-full max-lg:px-5 max-md:block">
            <section className="max-md:pb-6">
                <h1 className="text-white text-6xl text-center leading-23 font-semibold max-lg:text-5xl max-lg:leading-20 max-md:text-4xl max-md:leading-16">
                    <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="block">Who needs slash commands</motion.span></div>
                    <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="block">when you have <span className="text-rose-500">Agentic AI</span>?</motion.span></div>
                </h1>

                <motion.div className="mt-12 max-lg:mt-8 max-md:mt-4.5" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.7 }}>
                    <p className="text-lg text-center block max-lg:text-base">Vesper is an agentic AI Discord bot designed with effortless automation in mind.</p>

                    <div className="w-fit mx-auto mt-14 max-lg:mt-12 max-md:mt-8">
                        <Button url="https://discord.com/oauth2/authorize?client_id=1028726248861605999&permissions=8&integration_type=0&scope=applications.commands+bot" classes="inline-block align-middle w-32">Get Started</Button>
                        <Button url="/about" classes="inline-block align-middle w-32 ml-4" alt={true}>Learn More</Button>
                    </div>
                </motion.div>
            </section>

            <section className="overflow-hidden">
                <FeatureRow title="Server Management" image="/images/home/server-management.png" delay={1.1}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos quisquam in aliquam ratione hic sed, asperiores aspernatur adipisci est magni aliquid doloremque, autem nulla esse.
                </FeatureRow>

                <FeatureRow title="Moderation" image="/images/home/moderation.png" delay={1.3} reverse={true}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos quisquam in aliquam ratione hic sed, asperiores aspernatur adipisci est magni aliquid doloremque, autem nulla esse.
                </FeatureRow>

                <FeatureRow title="And So Much More" image="/images/home/more.png" delay={1.5}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos quisquam in aliquam ratione hic sed, asperiores aspernatur adipisci est magni aliquid doloremque, autem nulla esse.
                </FeatureRow>             
            </section>
        </main>
    );
}

function FeatureRow({ title, children, image, delay = 0, reverse = false }: any) {
    return (
        <motion.article 
            className={`flex items-center gap-10 ${reverse ? "flex-row-reverse" : ""} mb-12 select-none max-lg:mb-6 max-lg:gap-6 max-md:flex-col`}
            initial={{ x: reverse ? "-100%" : "100%" }}
            animate={{ x: 0 }}
            transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 12,
                delay: delay
            }}
        >
            <div className="w-1/2 max-md:w-full">
                <h2 className="block mb-2.25 text-xl font-semibold text-white">{title}</h2>
                <p className="text-sm leading-6">{children}</p>
            </div>

            <div className="w-1/2 max-md:w-full">
                <img src={image} alt={title} className="w-full h-auto rounded-lg aspect-[60/17] object-cover" />
            </div>
        </motion.article>
    );
}