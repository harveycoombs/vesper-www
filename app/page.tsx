"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

import Button from "@/app/components/common/Button";

export default function Home() {
    const [serverCount, setServerCount] = useState<number>(0);

    useEffect(() => {
        (async () => {
            const response = await fetch("/api/guilds/total");
            const data = await response.json();

            if (!response.ok) {
                console.log(`Failed to fetch server count.\nStatus code: ${response.status}`);
                return;
            }

            setServerCount(data.total ?? 0);
        })();
    }, []);

    return (
        <main className="w-250 min-h-[calc(100vh-138px)] mx-auto grid place-items-center max-lg:w-full max-lg:px-5 max-md:block">
            <section className="max-md:pb-6">
                <h1 className="text-white text-6xl text-center leading-23 font-semibold max-lg:text-5xl max-lg:leading-20 max-md:text-4xl max-md:leading-16">
                    <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="block">Who needs slash commands</motion.span></div>
                    <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="block">when you have <span className="text-rose-500">Agentic AI</span>?</motion.span></div>
                </h1>

                <motion.div className="mt-12 max-lg:mt-8 max-md:mt-4.5" initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.7 }}>
                    <p className="text-lg text-center block max-lg:text-base">Vesper is an agentic AI Discord bot designed with effortless automation in mind.</p>

                    <div className="py-1.75 px-2.25 rounded-md w-fit mx-auto mt-6 text-sm font-medium leading-none select-none text-zinc-300 bg-zinc-800/75">Active in {(new Intl.NumberFormat("en-US")).format(serverCount)} server{serverCount == 1 ? "" : "s"}</div>

                    <div className="w-fit mx-auto mt-7 max-lg:mt-12 max-md:mt-8">
                        <Button url="https://discord.com/oauth2/authorize?client_id=1028726248861605999&permissions=8&integration_type=0&scope=applications.commands+bot" classes="inline-block align-middle w-32">Get Started</Button>
                        <Button url="/about" classes="inline-block align-middle w-32 ml-4" alt={true}>Learn More</Button>
                    </div>
                </motion.div>
            </section>

            <section className="overflow-hidden">
                <FeatureRow title="Server Management" image="/images/home/server-management.png" delay={1.1}>
                    Vesper can be used to manage just about every aspect of your server, whether its role assignments, channel management, emojis and more. Vesper is the perfect sidekick for setting up and managing your server.
                </FeatureRow>

                <FeatureRow title="Moderation" image="/images/home/moderation.png" delay={1.3} reverse={true}>
                    Vesper can also be used to moderate your server, with features such as word filters, banning/kicking, timeouts or spam detection. Vesper will keep your server safe and free from unwanted content or users.
                </FeatureRow>

                <FeatureRow title="And So Much More" image="/images/home/more.png" delay={1.5}>
                    In addition to the features mentioned above, Vesper can do so much more and can hold conversations with users. Vesper will fit right into your community as an friendly and helpful assistant.
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
                delay
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