import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="w-375 min-h-[calc(100vh-142px)] mx-auto max-2xl:w-300 max-xl:w-full max-xl:px-5 max-md:min-h-[calc(100vh-170px)]">
            <section className="py-6">
                <h1 className="block pt-18 pb-6 text-6xl font-semibold text-white text-center max-sm:text-5xl max-sm:pt-8">About Vesper</h1>

                <article className="py-6">
                    <h2 className="text-4xl font-semibold text-white max-sm:text-3xl">What can I do with Vesper?</h2>

                    <p className="pt-3 leading-7 max-sm:text-sm">Vesper can manage just about any aspect of your server. From moderation to server customisation, Vesper makes the perfect moderator or administrator.</p>

                    <p className="pt-3 leading-7 max-sm:text-sm">In addition to these agentic capabilites, Vesper also behaves as a regular chat bot, answering general questions and participating in conversations (optional).</p>
                </article>

                <article className="py-6">
                    <h2 className="text-4xl font-semibold text-white max-sm:text-3xl">How does Vepser work?</h2>

                    <p className="pt-3 leading-7 max-sm:text-sm">There are two answers to this question.</p>

                    <p className="pt-3 leading-7 max-sm:text-sm">Technically speaking, Vesper was written in Python, interacting with the Discord API directly (no 3rd-party wrappers). It currently leverages the Gemma 3 model for its capabilities.</p>

                    <p className="pt-3 leading-7 max-sm:text-sm">As for how to use Vesper, simply ask it to do something (examples: 'Give me the Green role', 'Create a channel called gaming and make it private to the gaming role'), and it will oblige. Vesper can interpret many different writing styles, and is able to understand and respond to all kinds of requests.</p>

                    <p className="pt-3 leading-7 max-sm:text-sm">Pretty cool, right?</p>
                </article>
                
                <article className="py-6">
                    <h2 className="text-4xl font-semibold text-white max-sm:text-3xl">Who created Vesper?</h2>

                    <p className="pt-3 leading-7 max-sm:text-sm">Vesper was created and is maintained by <Link href="https://harveycoombs.com" target="_blank" rel="noopener noreferrer" className="hover:underline">Harvey Coombs</Link>. Originally developed in early 2021 as a general purpose bot, Vesper has evolved into a next-generation AI agent.</p>
                    
                    <p className="pt-3 leading-7 max-sm:text-sm">Vesper is closed source at this time.</p>
                </article>

                <article className="py-6">
                    <h2 className="text-4xl font-semibold text-white max-sm:text-3xl">Is Vesper free?</h2>

                    <p className="pt-3 leading-7 max-sm:text-sm">Vesper is currently in development. It is free to use up to 200 interactions per month, per server. Subscription plans to increase this limit, alongside other unlocking features, will be available soon.</p>
                </article>                
            </section>
        </main>
    )
}