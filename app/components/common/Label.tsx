interface Properties {
    children: React.ReactNode;
    classes?: string;
    [key: string]: any;
}

export default function Label({ children, classes = "", ...rest }: Properties) {
    return <label className={`text-xs font-medium text-zinc-600 ${classes}`} {...rest}>{children}</label>;
}