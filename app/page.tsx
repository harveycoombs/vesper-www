import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChain } from "@fortawesome/free-solid-svg-icons";

import Button from "@/app/components/common/Button";

export default function Home() {
    return (
        <main className="w-full h-[calc(100vh-64px)] px-5 pb-5 flex justify-between items-end relative z-10">
            <h1 className="text-white text-8xl leading-30 font-semibold">Who needs<br/>Slash Commands<br/>when you have<br/>Agentic <span className="grad-text">AI</span>?</h1>

            <nav className="flex gap-4">
                <Button url="/"><FontAwesomeIcon icon={faChain} /> Invite Bot</Button>
            </nav>
        </main>
    );
}