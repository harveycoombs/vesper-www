"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
    const [serverCount, setServerCount] = useState<number>(0);

    useEffect(() => {
        (async () => {
            // to-do
        })();
    }, []);

    return (
        <footer className="w-375 mx-auto py-5 flex justify-between items-center text-sm font-medium max-2xl:w-300 max-xl:w-full max-xl:px-5 max-md:flex-col max-md:gap-2 max-md:text-center">
            <div>{new Date().getFullYear()} &middot; Vesper &middot; <Link href="https://harveycoombs.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Harvey Coombs</Link></div>

            <div className="max-md:hidden">Active in {serverCount} servers</div>

            <div className="select-none">
                <Link href="/documents/terms-of-service.pdf" target="_blank" rel="noopener noreferrer" className="inline-block align-middle hover:underline">Terms of Service</Link>
                <span className="inline-block align-middle mx-1.5">&middot;</span>
                <Link href="/documents/privacy-policy.pdf" target="_blank" rel="noopener noreferrer" className="inline-block align-middle hover:underline">Privacy Policy</Link>
                <span className="inline-block align-middle mx-1.5">&middot;</span>
                <Link href="mailto:contact@harveycoombs.com" target="_blank" rel="noopener noreferrer" className="inline-block align-middle text-base ml-0.5 duration-150 hover:text-gray-300 active:text-white"><FontAwesomeIcon icon={faEnvelope} /></Link>
            </div>
        </footer>
    );
}