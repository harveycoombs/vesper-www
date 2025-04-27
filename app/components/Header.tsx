import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChain } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

import Logo from "@/app/components/common/Logo";
import Button from "@/app/components/common/Button";

export default function Header() {
    return (
        <header className="w-375 mx-auto py-5 flex justify-between items-center select-none max-2xl:w-300 max-xl:w-full max-xl:px-5">
            <Link href="/" className="duration-150 hover:opacity-80 active:opacity-70"><Logo width={35} height={28} /></Link>

            <nav className="ml-41.25 max-md:hidden">
                <HeaderLink url="/about">About</HeaderLink>
                <HeaderLink url="/docs">Documentation</HeaderLink>
                <HeaderLink url="/news">News</HeaderLink>
                <HeaderLink url="/support">Support</HeaderLink>
            </nav>

            <div>
                <HeaderIcon url="https://github.com/harveycoombs" icon={faBars} classes="invisible max-md:visible" />
                <Button url="https://discord.com/oauth2/authorize?client_id=1028726248861605999&permissions=8&integration_type=0&scope=applications.commands+bot" target="_blank" rel="noopener noreferrer" classes="inline-block align-middle ml-4.5"><FontAwesomeIcon icon={faChain} /> Invite</Button>
                <HeaderIcon url="https://github.com/harveycoombs" icon={faGithub} />
                <HeaderIcon url="https://discord.gg/aF4EctqgPS" icon={faDiscord} />
            </div>
        </header>
    );
}

function HeaderLink({ url, children }: any) {
    return <Link href={url} className="inline-block align-middle text-sm font-medium leading-none mx-5 cursor-pointer duration-150 hover:text-gray-300 active:text-white" target="_blank" rel="noopener noreferrer">{children}</Link>;
}

function HeaderIcon({ url = "", icon, classes = "", ...rest }: any) {
    const classList = `inline-block align-middle text-xl ml-4.5 cursor-pointer duration-150 hover:text-gray-300 active:text-white ${classes.length ? classes : ""}`;
    return url.length ? <Link href={url} className={classList} target="_blank" rel="noopener noreferrer" {...rest}><FontAwesomeIcon icon={icon} /></Link> : <div className={classList} {...rest}><FontAwesomeIcon icon={icon} /></div>;
}