import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChain } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faXTwitter, faDiscord } from "@fortawesome/free-brands-svg-icons";

import Button from "@/app/components/common/Button";
import SocialMediaIcon from "@/app/components/common/SocialMediaIcon";

export default function Home() {
    return (
        <main className="w-full h-[calc(100vh-64px)] px-5 pb-5 flex justify-between items-end relative z-10">
            <h1 className="text-white text-8xl leading-30 font-semibold">Who needs<br/>Slash Commands<br/>when you have<br/>Agentic <span className="grad-text">AI</span>?</h1>

            <nav className="flex items-center gap-5">
                <Button url="/"><FontAwesomeIcon icon={faChain} /> Invite Bot</Button>
                <SocialMediaIcon url="https://github.com/harveycoombs" icon={faGithub} />
                <SocialMediaIcon url="https://x.com/harveycoombs" icon={faXTwitter} />
                <SocialMediaIcon url="https://discord.gg/vesper" icon={faDiscord} />
            </nav>
        </main>
    );
}