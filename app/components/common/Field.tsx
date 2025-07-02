import Link from "next/link";

interface Properties {
    type?: string;
    classes?: string;
    [key: string]: any;
}

export default function Field({ type = "text", classes = "", ...rest }: Properties) {
    return <input type={type} className={`px-4.5 py-3 rounded-xl text-[0.8rem] leading-none duration-200 text-zinc-300 bg-zinc-900 ${classes}`} {...rest} />;
}