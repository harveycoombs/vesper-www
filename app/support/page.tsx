import Link from "next/link";

export default function SupportPage() {
    return (
        <main className="w-375 min-h-[calc(100vh-142px)] mx-auto max-2xl:w-300 max-xl:w-full max-xl:px-5 max-md:min-h-[calc(100vh-170px)]">
            <section className="py-6 text-center">
                <h1 className="block pt-18 pb-6 text-6xl font-semibold text-white text-center">Support</h1>

                <article className="py-6 leading-7">
                    <p>For support with installing &amp; using Vesper, try consulting the <Link href="https://vesper.gg/docs">Documentation</Link> or the <Link href="https://discord.com/invite/sT5PjWU" target="_blank" rel="noopener noreferrer" className="hover:underline">Official Discord Server</Link>.</p>

                    <p>If you have encountered any other issues with Vesper, please report them by emailing <Link href="mailto:contact@harveycoombs.com" className="hover:underline">Harvey Coombs</Link>.</p>
                </article>   
            </section>
        </main>
    )
}