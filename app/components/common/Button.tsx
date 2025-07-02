import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

interface Properties {
    children: React.ReactNode;
    url?: string;
    classes?: string;
    alt?: boolean;
    loading?: boolean;
    disabled?: boolean;
    [key: string]: any;
}

export default function Button({ children, url = "", classes = "", alt, loading, disabled, ...rest }: Properties) {
    const appearance = alt 
        ? "text-zinc-300 bg-zinc-700 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.1),inset_-2px_-2px_5px_rgba(0,0,0,0.5)] hover:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.1),inset_2px_2px_5px_rgba(0,0,0,0.5)] hover:translate-y-[1px]" 
        : "font-medium text-white bg-rose-500 shadow-[inset_2px_2px_5px_rgba(255,255,255,0.2),inset_-2px_-2px_5px_rgba(0,0,0,0.3)] hover:shadow-[inset_-2px_-2px_5px_rgba(255,255,255,0.2),inset_2px_2px_5px_rgba(0,0,0,0.3)] active:shadow-[inset_2px_2px_5px_rgba(255,255,255,0.2),inset_-2px_-2px_5px_rgba(0,0,0,0.3)] hover:translate-y-[1px]";
    const classList = `px-4.5 py-3 rounded-xl text-[0.8rem] leading-none select-none cursor-pointer text-center duration-200 ${appearance} ${classes}`;
    
    return url.length ? <Link href={url} className={classList} {...rest}>{children}</Link> : <button className={classList} disabled={disabled || loading} {...rest}>{loading ? <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" /> : children}</button>;
}