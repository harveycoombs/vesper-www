import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

interface Properties {
    title?: string;
    loading?: boolean;
    classes?: string;
    children: React.ReactNode;
    [key: string]: any;
}

export default function Panel({ title = "", loading = false, classes = "", children, ...rest }: Properties) {
    return (
        <div className={`p-3.5 rounded-md bg-zinc-800 ${classes}`} {...rest}>
            {title.length > 0 && <strong className="block text-sm leading-none font-semibold text-zinc-400/75 select-none mb-2.5">{title}</strong>}
            {loading ? <FontAwesomeIcon icon={faCircleNotch} className="text-zinc-500 text-xl animate-spin" /> : children}
        </div>
    );
}