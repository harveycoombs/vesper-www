"use client";

import { motion } from "motion/react";
import Button from "./components/common/Button";

export default function Home() {
    return (
        <main className="w-250 h-screen mx-auto grid place-items-center">
            <section>
                <h1 className="text-white text-6xl text-center leading-23 font-semibold">
                    <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.5 }} className="block">Who needs slash commands</motion.span></div>
                    <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.5, delay: 0.25 }} className="block">when you have <span className="text-rose-500">Agentic AI</span>?</motion.span></div>
                </h1>

                <motion.div className="mt-12" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.6 }}>
                    <p className="text-lg text-center block">Vesper is an agentic AI Discord bot designed with effortless automation in mind.</p>

                    <div className="w-fit mx-auto mt-14">
                        <Button url="https://discord.com/oauth2/authorize?client_id=1028726248861605999&permissions=8&integration_type=0&scope=applications.commands+bot" classes="inline-block align-middle w-32">Get Started</Button>
                        <Button url="/about" classes="inline-block align-middle w-32 ml-4" alt={true}>Learn More</Button>
                    </div>
                </motion.div>
            </section>

            <section >

            </section>
        </main>
    );
}
