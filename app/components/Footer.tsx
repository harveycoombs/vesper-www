import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-250 mx-auto py-5 flex justify-between items-center text-sm">
            <div>2021&ndash;{new Date().getFullYear()} &copy; Vesper &middot; <Link href="https://harveycoombs.com" className="hover:underline">Harvey Coombs</Link></div>

            <div>
                <Link href="/documents/terms-of-service.pdf" className="hover:underline">Terms of Service</Link> &middot; <Link href="/documents/privacy-policy.pdf" className="hover:underline">Privacy Policy</Link>
            </div>
        </footer>
    );
}