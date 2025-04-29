"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChain, faXmark } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faDiscord } from "@fortawesome/free-brands-svg-icons";

import Logo from "@/app/components/common/Logo";
import Button from "@/app/components/common/Button";

export default function Header() {
    const [mobileMenuIsVisible, setMobileMenuIsVisible] = useState<boolean>(false);

    return (
        <header className="w-375 mx-auto py-5 flex justify-between items-center select-none max-2xl:w-300 max-xl:w-full max-xl:px-5">
            <Link href="/" className="duration-150 hover:opacity-80 active:opacity-70"><Logo width={35} height={28} /></Link>

            <nav className="ml-41.25 max-lg:ml-0 max-md:hidden">
                <HeaderLink url="/about">About</HeaderLink>
                <HeaderLink url="https://harvey-coombs-1.gitbook.io/vesper" target="_blank" rel="noopener noreferrer">Documentation</HeaderLink>
                <HeaderLink url="/news">News</HeaderLink>
                <HeaderLink url="/support">Support</HeaderLink>
            </nav>

            <div>
                <HeaderIcon icon={faBars} classes="md:hidden mr-4.5" onClick={() => setMobileMenuIsVisible(true)} />
                <Button url="https://discord.com/oauth2/authorize?client_id=1028726248861605999&permissions=8&integration_type=0&scope=applications.commands+bot" target="_blank" rel="noopener noreferrer" classes="inline-block align-middle"><FontAwesomeIcon icon={faChain} /> Invite</Button>
                <HeaderIcon url="https://github.com/harveycoombs" icon={faGithub} classes="inline-block align-middle" />
                <HeaderIcon url="https://discord.gg/aF4EctqgPS" icon={faDiscord} classes="inline-block align-middle" />
            </div>

            {mobileMenuIsVisible && (
                <div className="fixed inset-0 z-50 w-full h-full bg-black/60 backdrop-blur-sm">
                    <div className="w-full h-full flex items-center justify-center select-none">
                        <div className="absolute top-5 right-5 text-3xl cursor-pointer text-gray-300 duration-150 active:text-white active:scale-90" onClick={() => setMobileMenuIsVisible(false)}><FontAwesomeIcon icon={faXmark} /></div>

                        <nav>
                            <Link className="block text-center text-lg py-4 text-gray-300 cursor-pointer duration-150 active:text-white active:scale-90" href="/about">About</Link>
                            <Link className="block text-center text-lg py-4 text-gray-300 cursor-pointer duration-150 active:text-white active:scale-90" href="https://harvey-coombs-1.gitbook.io/vesper" target="_blank" rel="noopener noreferrer">Documentation</Link>
                            <Link className="block text-center text-lg py-4 text-gray-300 cursor-pointer duration-150 active:text-white active:scale-90" href="/news">News</Link>
                            <Link className="block text-center text-lg py-4 text-gray-300 cursor-pointer duration-150 active:text-white active:scale-90" href="/support">Support</Link>
                        </nav>
                    </div>
                </div>
            )}
        </header>
    );
}

function HeaderLink({ url, children }: any) {
    return <Link href={url} className="inline-block align-middle text-sm font-medium leading-none mx-5 cursor-pointer duration-150 hover:text-gray-300 active:text-white">{children}</Link>;
}

function HeaderIcon({ url = "", icon, classes = "", ...rest }: any) {
    const classList = `inline-block align-middle text-xl ml-4.5 cursor-pointer duration-150 hover:text-gray-300 active:text-white ${classes.length ? classes : ""}`;
    return url.length ? <Link href={url} className={classList} target="_blank" rel="noopener noreferrer" {...rest}><FontAwesomeIcon icon={icon} /></Link> : <div className={classList} {...rest}><FontAwesomeIcon icon={icon} /></div>;
}