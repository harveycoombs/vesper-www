import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Properties {
    url: string;
    icon: any;
}

export default function SocialMediaIcon({ url, icon }: Properties) {
    return <Link href={url} target="_blank" rel="noopener" className="text-xl leading-none cursor-pointer select-none duration-200 hover:text-gray-400 active:text-gray-500 max-lg:text-2xl"><FontAwesomeIcon icon={icon} /></Link>;
}