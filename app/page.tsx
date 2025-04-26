"use client";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChain } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faXTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

import Button from "@/app/components/common/Button";
import SocialMediaIcon from "@/app/components/common/SocialMediaIcon";

export default function Home() {
    return (
        <main className="w-full h-[calc(100vh-64px)] px-5 pb-5 flex justify-between items-end relative z-10">
            <h1 className="text-white text-8xl leading-30 font-semibold">
                <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6 }} className="block">Who needs</motion.span></div>
                <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="block">Slash Commands</motion.span></div>
                <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="block">when you have</motion.span></div>
                <div className="overflow-hidden"><motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="block">Agentic <span className="grad-text">AI</span>?</motion.span></div>
            </h1>

            <nav className="flex items-center gap-5">
                <Button url="https://discord.com/oauth2/authorize?client_id=1028726248861605999&permissions=8&integration_type=0&scope=applications.commands+bot"><FontAwesomeIcon icon={faChain} /> Invite Bot</Button>
                <SocialMediaIcon url="https://github.com/harveycoombs" icon={faGithub} />
                <SocialMediaIcon url="https://x.com/harveycoombs" icon={faXTwitter} />
                <SocialMediaIcon url="https://discord.gg/vesper" icon={faDiscord} />
            </nav>
        </main>
    );
}