import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import Logo from "@/app/components/common/Logo";
import Button from "@/app/components/common/Button";

export default function Header() {
    return (
        <header className="py-5 w-250 mx-auto flex items-center justify-between sticky top-0">
            <nav className="flex items-center gap-8">
                <Logo width={38} height={30} />
            
                <HeaderLink url="/about">About</HeaderLink>
                <HeaderLink url="/documentation">Documentation</HeaderLink>
                <HeaderLink url="/contact">Contact</HeaderLink>
            </nav>

            <div>
                <Button url="https://discord.com/oauth2/authorize?client_id=1028726248861605999&permissions=8&integration_type=0&scope=applications.commands+bot" target="_blank" rel="noopener noreferrer" classes="inline-block align-middle"><FontAwesomeIcon icon={faLink} className="text-rose-300 mr-1.5" />Invite</Button>
                <Link href="/" className="inline-block align-middle ml-4.5 text-xl leading-none text-zinc-600 select-none cursor-pointer duration-200 hover:text-white"><FontAwesomeIcon icon={faDiscord} /></Link>
            </div>
        </header>
    );
}

function HeaderLink({ url, children }: any) {
    return <Link href={url} className="text-sm font-medium select-none cursor-pointer duration-200 hover:text-white">{children}</Link>;
}