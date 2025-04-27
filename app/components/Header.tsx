import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChain } from "@fortawesome/free-solid-svg-icons";

import Logo from "@/app/components/common/Logo";
import Button from "@/app/components/common/Button";
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
    return (
        <header className="w-375 mx-auto py-5 flex justify-between items-center">
            <Link href="/" className="duration-150 hover:opacity-80 active:opacity-70"><Logo width={35} height={28} /></Link>

            <nav>
                <HeaderLink url="/about">About</HeaderLink>
                <HeaderLink url="/docs">Documentation</HeaderLink>
                <HeaderLink url="/news">News</HeaderLink>
                <HeaderLink url="/support">Support</HeaderLink>
            </nav>

            <div>
                <Button url="https://discord.com/oauth2/authorize?client_id=1028726248861605999&permissions=8&integration_type=0&scope=applications.commands+bot" target="_blank" classes="inline-block align-middle"><FontAwesomeIcon icon={faChain} /> Invite</Button>
                <HeaderIcon url="https://github.com/harveycoombs" icon={faGithub} />
                <HeaderIcon url="https://discord.gg/aF4EctqgPS" icon={faDiscord} />
            </div>
        </header>
    );
}

function HeaderLink({ url, children }: any) {
    return <Link href={url} className="inline-block align-middle text-sm font-medium leading-none mx-5 select-none cursor-pointer duration-150 hover:text-gray-300 active:text-white">{children}</Link>;
}

function HeaderIcon({ url, icon }: any) {
    return <Link href={url} className="inline-block align-middle text-xl ml-4.5 select-none cursor-pointer duration-150 hover:text-gray-300 active:text-white"><FontAwesomeIcon icon={icon} /></Link>;
}