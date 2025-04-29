import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="w-375 min-h-[calc(100vh-142px)] mx-auto max-2xl:w-300 max-xl:w-full max-xl:px-5 max-md:min-h-[calc(100vh-170px)]">
            <section className="py-6">
                <h1 className="block pt-18 pb-6 text-6xl font-semibold text-white text-center">About Vesper</h1>

                <article className="py-6">
                    <h2 className="text-4xl font-semibold text-white">What can I do with Vesper?</h2>

                    <p className="pt-3 leading-7">Vesper can manage just about any aspect of your server. From moderation to server customisation, Vesper makes the perfect moderator or administrator.</p>

                    <p className="pt-3 leading-7">In addition to these agentic capabilites, Vesper also behaves as a regular chat bot, answering general questions and participating in conversations (optional).</p>
                </article>

                <article className="py-6">
                    <h2 className="text-4xl font-semibold text-white">How does Vepser work?</h2>

                    <p className="pt-3 leading-7">There are two answers to this question.</p>

                    <p className="pt-3 leading-7">Technically speaking, Vesper was written in Python, interacting with the Discord API directly (no 3rd-party wrappers). It currently leverages the Gemma 3 model for its capabilities.</p>

                    <p className="pt-3 leading-7">As for how to use Vesper, simply ask it to do something (examples: 'Give me the Green role', 'Create a channel called gaming and make it private to the gaming role'), and it will oblige. Vesper can interpret many different writing styles, and is able to understand and respond to all kinds of requests.</p>

                    <p className="pt-3 leading-7">Pretty cool, right?</p>
                </article>
                
                <article className="py-6">
                    <h2 className="text-4xl font-semibold text-white">Who created Vesper?</h2>

                    <p className="pt-3 leading-7">Vesper was created and is maintained by <Link href="https://harveycoombs.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Harvey Coombs</Link>. Originally developed in early 2021 as a general purpose bot, Vesper has evolved into a next-generation AI agent.</p>
                    
                    <p className="pt-3 leading-7">Vesper is closed source at this time.</p>
                </article>

                <article className="py-6">
                    <h2 className="text-4xl font-semibold text-white">Is Vesper free?</h2>

                    <p className="pt-3 leading-7">Vesper is currently in development. It is free to use up to 200 interactions per month, per server. Subscription plans to increase this limit, alongside other unlocking features, will be available soon.</p>
                </article>                
            </section>
        </main>
    )
}