interface Properties {
    children: React.ReactNode;
    classes?: string;
    [key: string]: any;
}

export default function Menu({ children, classes = "", ...rest }: any) {
    return (
        <select className={`px-4 py-2.75 rounded-xl text-[0.8rem] leading-none duration-200 text-zinc-300 bg-zinc-800 border border-zinc-700/65 focus:outline-none focus:border-zinc-600 ${classes}`} {...rest}>
            {children}
        </select>
    );
}