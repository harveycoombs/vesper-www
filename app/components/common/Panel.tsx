export default function Panel({ children, title = "", classes = "", ...rest }: any) {
    return (
        <div className={`p-5 rounded-xl bg-[#131B29] ${classes.length ? classes : ""}`} {...rest}>
            {title && <h2 className="block w-fit text-lg leading-none text-white font-bold select-none relative z-10">{title}</h2>}
            {children}
        </div>
    );
}