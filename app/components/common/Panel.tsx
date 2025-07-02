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
        <div className={`p-4.5 rounded-xl bg-zinc-900/90 text-zinc-400 backdrop-blur-lg border border-white/5 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.1),inset_2px_2px_4px_rgba(0,0,0,0.3),0_4px_15px_rgba(0,0,0,0.2)] ${classes}`} {...rest}>
            {title.length > 0 && <strong className="block text-sm leading-none font-medium text-white select-none mb-3.5 tracking-wide">{title}</strong>}
            {loading ? <FontAwesomeIcon icon={faCircleNotch} className="text-zinc-400 text-xl animate-spin" /> : children}
        </div>
    );
}