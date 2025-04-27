import Link from "next/link";

interface Properties {
    children: React.ReactNode;
    url?: string;
    classes?: string;
    [key: string]: any;
}

export default function Button({ children, url, classes, ...rest }: Properties) {
    const classList = `px-4.5 py-3 rounded-md text-[0.8rem] font-medium text-white leading-none bg-gradient-to-b from-[#FF2056] to-[#F6339A] cursor-pointer select-none duration-150 hover:opacity-80 active:opacity-70 ${classes?.length ? classes : ""}`;
    return url?.length ? <Link href={url} className={classList} {...rest}>{children}</Link> : <button className={classList} {...rest}>{children}</button>;
}