import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
    return (
        <footer className="w-250 mx-auto py-5 flex justify-between items-center text-sm max-lg:w-full max-lg:px-5 max-sm:flex-col max-sm:items-center max-sm:gap-2.5">
            <div>2021&ndash;{new Date().getFullYear()} &copy; Vesper &middot; <Link href="https://harveycoombs.com" className="hover:underline">Harvey Coombs</Link></div>

            <div className="flex gap-1.25">
                <Link href="/documents/terms-of-service.pdf" className="hover:underline">Terms of Service</Link>
                <span>&middot;</span>
                <Link href="/documents/privacy-policy.pdf" className="hover:underline">Privacy Policy</Link>
                <span>&middot;</span>
                <Link href="https://discord.gg/aF4EctqgPS" target="_blank" rel="noopener noreferrer" className="duration-200 hover:text-white"><FontAwesomeIcon icon={faDiscord} /></Link>
            </div>
        </footer>
    );
}