import Link from "next/link";

export default function About() {
    return (
        <main className="w-250 min-h-[calc(100vh-138px)] mx-auto max-lg:w-full max-lg:px-5">
            <section className="pt-20 max-sm:pt-10">
                <h1 className="block text-5xl font-semibold text-white text-center">About Vesper</h1>
            </section>

            <section className="mt-15">
                <h2 className="block mb-3 text-3xl font-semibold text-white max-sm:text-2xl">What can I do with Vesper?</h2>

                <p className="leading-7 max-sm:text-sm">Vesper can manage just about any aspect of your server. From moderation to server customisation, Vesper makes the perfect moderator or administrator.</p>
            </section>

            <section className="mt-10">
                <h2 className="block mb-3 text-3xl font-semibold text-white max-sm:text-2xl">How does Vepser work?</h2>

                <p className="leading-7 max-sm:text-sm">Vesper was written in Python, interacting with the Discord API directly (no 3rd-party wrappers). It currently leverages<br/>the Qwen 3 (14B) model for its capabilities.</p>
                <br/>
                <p className="leading-7 max-sm:text-sm">As for how to use Vesper, simply ask it to do something (examples: 'Give me the Green role', 'Create a channel called gaming and make it private to the gaming role'), and it will oblige.</p>
                <br/>
                <p className="leading-7 max-sm:text-sm">Vesper can interpret many different writing styles, and is able to understand and respond to all kinds of requests.</p>
            </section>

            <section className="mt-10">
                <h2 className="block mb-3 text-3xl font-semibold text-white max-sm:text-2xl">Who created Vesper?</h2>

                <p className="leading-7 max-sm:text-sm">Vesper was created and is maintained by <Link href="https://harveycoombs.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Harvey Coombs</Link>. Originally developed in early 2021 as a general purpose bot, Vesper has evolved into a next-generation AI agent.</p>
                <br/>
                <p className="leading-7 max-sm:text-sm">Vesper is closed source at this time.</p>
            </section>

            <section className="mt-10">
                <h2 className="block mb-3 text-3xl font-semibold text-white max-sm:text-2xl">Is Vesper free?</h2>

                <p className="leading-7 max-sm:text-sm">Vesper is free to use up to 200 interactions per month, per server. Subscription plans to increase this limit will be available soon.</p>
            </section>
        </main>
    );
}