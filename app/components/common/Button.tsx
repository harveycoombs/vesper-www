import Link from "next/link";

interface Properties {
    children: React.ReactNode;
    url: string;
    classes?: string;
    [key: string]: any;
}

export default function Button({ children, url = "", classes = "", ...rest }: Properties) {
    const classList = `px-4.5 py-3 text-[0.8rem] leading-none font-medium text-white rounded-md bg-rose-500 select-none cursor-pointer text-center duration-200 ${classes} hover:bg-rose-600 active:bg-rose-700`;
    return url.length ? <Link href={url} className={classList} {...rest}>{children}</Link> : <button className={classList} {...rest}>{children}</button>;
}