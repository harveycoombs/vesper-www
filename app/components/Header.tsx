import Link from "next/link";

export default function Header() {
    return (
        <header className="p-5 flex justify-between items-center">
            <strong className="text-white select-none font-bold">Vesper.gg</strong>
            <div className="font-medium select-none text-sm leading-none">Created by <Link href="https://harveycoombs.com" target="_blank" rel="noopener" className="hover:underline">Harvey Coombs</Link></div>
        </header>
    );
}