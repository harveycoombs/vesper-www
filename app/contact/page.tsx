"use client";
import { useState } from "react";
import Link from "next/link";

import Label from "@/app/components/common/Label";
import Field from "@/app/components/common/Field";
import Button from "@/app/components/common/Button";
import Panel from "@/app/components/common/Panel";

export default function Contact() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    const [loading, setLoading] = useState<boolean>(false);
    const [feedback, setFeedback] = useState<React.ReactNode>(null);

    async function submitEnquiry(e: any) {
        e.preventDefault();

        setLoading(true);
        setFeedback(null);

        const response = await fetch("/api/enquire", {
            method: "POST",
            body: new URLSearchParams({ name, email, message })
        });

        setLoading(false);

        if (!response.ok) {
            setFeedback(<div className="rounded text-sm font-medium py-1 px-1.5 mb-3 select-none bg-red-200 text-red-500">Something went wrong. Please try again later.</div>);            
            return;
        }

        setFeedback(<div className="rounded text-sm font-medium py-1 px-1.5 mb-3 select-none bg-emerald-100 text-emerald-500">Enquiry submitted successfully.</div>);
    }
    
    return (
        <main className="w-250 min-h-[calc(100vh-138px)] mx-auto max-lg:w-full max-lg:px-5">
            <section className="pt-20 max-sm:pt-10">
                <h1 className="block text-5xl font-semibold text-white text-center">Contact</h1>
            </section>

            <section className="mt-15">
                <h2 className="block mb-3 text-3xl font-semibold text-white">Enquiry Form</h2>

                <p className="leading-7">Fill in the fields below and click submit to get in touch.</p>

            <Panel>
                <form className="mt-8" onSubmit={submitEnquiry}>
                    {feedback}
                        
                    <fieldset className="flex gap-6 w-full max-sm:flex-col max-sm:gap-4">
                        <div className="w-1/2 max-sm:w-full">
                            <Label classes="block w-full mb-1">Your Name</Label>
                            <Field classes="block w-full" onInput={(e: any) => setName(e.target.value)} />
                        </div>

                        <div className="w-1/2 max-sm:w-full">
                            <Label classes="block w-full mb-1">Your Email</Label>
                            <Field classes="block w-full" onInput={(e: any) => setEmail(e.target.value)} />
                        </div>
                    </fieldset>

                    <Label classes="block w-full mb-1 mt-4">Your Message</Label>
                    <textarea className="block w-full px-4.5 py-3 rounded-md text-[0.8rem] leading-none resize-vertical min-h-20 max-h-80 duration-200 text-zinc-300 bg-zinc-900" rows={10} onInput={(e: any) => setMessage(e.target.value)}></textarea>

                    <Button classes="block w-full mt-4" loading={loading}>Submit</Button>
                </form>
            </Panel>

                <p className="leading-7 mt-8">Alternatively, join the official <Link href="https://discord.gg/aF4EctqgPS" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Vesper Discord server</Link> to keep up to date and to receive support.</p>
            </section>
        </main>
    );
}