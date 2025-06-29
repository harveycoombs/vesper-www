"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLink, faRightToBracket, faXmark } from "@fortawesome/free-solid-svg-icons";

import Logo from "@/app/components/common/Logo";
import Button from "@/app/components/common/Button";

export default function Header() {
    const [mobileMenuIsOpen, setMobileMenuOpen] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        (async () => {
            const response = await fetch("/api/user");
            const data = await response.json();

            if (response.ok) setUser(data.user);
        })();
    }, []);

    return (
        <>
            <header className="py-5 w-250 mx-auto flex items-center justify-between backdrop-blur-md sticky top-0 z-10 max-lg:w-full max-lg:px-5">
                <nav className="flex items-center gap-8">
                    <Link href="/" className="duration-200 hover:opacity-80 active:opacity-70"><Logo width={38} height={30} /></Link>
                
                    <HeaderLink url="/about">About</HeaderLink>
                    <HeaderLink url="https://harvey-coombs-1.gitbook.io/vesper" target="_blank" rel="noopener noreferrer">Documentation</HeaderLink>
                    <HeaderLink url="/contact">Contact</HeaderLink>
                </nav>

                <div>
                    <HeaderIcon icon={faBars} classes="sm:hidden" onClick={() => setMobileMenuOpen(true)} />
                    <Button url="https://discord.com/oauth2/authorize?client_id=1028726248861605999&permissions=8&integration_type=0&scope=applications.commands+bot" target="_blank" rel="noopener noreferrer" classes="inline-block align-middle mx-4.5"><FontAwesomeIcon icon={faLink} className="text-rose-300 mr-1.5" />Invite</Button>
                    {user ? <div>{JSON.stringify(user)}</div> : <HeaderIcon url="https://discord.com/oauth2/authorize?client_id=1388964034946011158&response_type=code&redirect_uri=https%3A%2F%2Fvesper.gg%2Fapi%2Fauth&scope=identify+email" icon={faRightToBracket} title="Log in with Discord" />}
                </div>
            </header>

            {mobileMenuIsOpen && (
                <div className="fixed inset-0 w-screen h-screen bg-black/50 backdrop-blur-md z-50 grid place-items-center">
                    <div className="absolute top-5 right-5 text-white text-3xl cursor-pointer duration-200 active:text-rose-300 active:scale-90" onClick={() => setMobileMenuOpen(false)}><FontAwesomeIcon icon={faXmark} /></div>

                    <div className="w-fit">
                        <Link href="/about" className="block text-white text-xl text-center font-medium my-6 duration-200 active:text-rose-300 active:scale-90">About</Link>
                        <Link href="https://harvey-coombs-1.gitbook.io/vesper" className="block text-white text-xl text-center font-medium my-6 duration-200 active:text-rose-300 active:scale-90">Documentation</Link>
                        <Link href="/contact" className="block text-white text-xl text-center font-medium my-6 duration-200 active:text-rose-300 active:scale-90">Contact</Link>
                    </div>
                </div>
            )}
        </>
    );
}

function HeaderLink({ url, children, ...rest }: any) {
    return <Link href={url} className="text-sm font-medium select-none cursor-pointer duration-200 hover:text-white max-sm:hidden">{children}</Link>;
}

function HeaderIcon({ url = "", icon, classes = "", ...rest }: any) {
    const classList = `inline-block align-middle text-xl leading-none text-zinc-600 select-none cursor-pointer duration-200 hover:text-white ${classes}`;  
    return url.length ? <Link href={url} className={classList} {...rest}><FontAwesomeIcon icon={icon} /></Link> : <button className={classList} {...rest}><FontAwesomeIcon icon={icon} /></button>;
}