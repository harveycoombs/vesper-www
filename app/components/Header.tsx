"use client";
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLink } from "@fortawesome/free-solid-svg-icons";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

import Logo from "@/app/components/common/Logo";
import Button from "@/app/components/common/Button";

export default function Header() {
    const [mobileMenuIsOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <header className="py-5 w-250 mx-auto flex items-center justify-between sticky top-0 max-lg:w-full max-lg:px-5">
            <nav className="flex items-center gap-8">
                <Logo width={38} height={30} />
            
                <HeaderLink url="/about">About</HeaderLink>
                <HeaderLink url="/documentation">Documentation</HeaderLink>
                <HeaderLink url="/contact">Contact</HeaderLink>
            </nav>

            <div>
                <HeaderIcon icon={faBars} classes="sm:hidden" onClick={() => setMobileMenuOpen(true)} />
                <Button url="https://discord.com/oauth2/authorize?client_id=1028726248861605999&permissions=8&integration_type=0&scope=applications.commands+bot" target="_blank" rel="noopener noreferrer" classes="inline-block align-middle mx-4.5"><FontAwesomeIcon icon={faLink} className="text-rose-300 mr-1.5" />Invite</Button>
                <HeaderIcon url="https://discord.gg/aF4EctqgPS" icon={faDiscord} />
            </div>

            {mobileMenuIsOpen && (
                <div className="fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-md z-50 grid place-items-center">
                    <div className="w-fit">
                        <Link href="/" className="block text-white text-xl text-center font-medium my-6 duration-200 hover:text-rose-300 active:scale-90">About</Link>
                        <Link href="/" className="block text-white text-xl text-center font-medium my-6 duration-200 hover:text-rose-300 active:scale-90">Documentation</Link>
                        <Link href="/" className="block text-white text-xl text-center font-medium my-6 duration-200 hover:text-rose-300 active:scale-90">Contact</Link>
                    </div>
                </div>
            )}
        </header>
    );
}

function HeaderLink({ url, children }: any) {
    return <Link href={url} className="text-sm font-medium select-none cursor-pointer duration-200 hover:text-white">{children}</Link>;
}

function HeaderIcon({ url = "", icon, classes = "", ...rest }: any) {
    const classList = `inline-block align-middle text-xl leading-none text-zinc-600 select-none cursor-pointer duration-200 hover:text-white ${classes}`;  
    return url.length ? <Link href={url} className={classList} {...rest}><FontAwesomeIcon icon={icon} /></Link> : <button className={classList} {...rest}><FontAwesomeIcon icon={icon} /></button>;
}