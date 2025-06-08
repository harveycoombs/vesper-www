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
    const appearance = alt ? " text-zinc-300 bg-zinc-700 hover:bg-zinc-700/75 active:bg-zinc-800" : "font-medium text-white bg-rose-500 hover:bg-rose-600 active:bg-rose-700";
    const classList = `px-4.5 py-3 rounded-md text-[0.8rem] leading-none select-none cursor-pointer text-center duration-200 ${appearance} ${classes}`;
    
    return url.length ? <Link href={url} className={classList} {...rest}>{children}</Link> : <button className={classList} disabled={disabled || loading} {...rest}>{loading ? <FontAwesomeIcon icon={faCircleNotch} className="animate-spin" /> : children}</button>;
}