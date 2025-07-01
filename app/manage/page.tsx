"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Manage() {
    const [servers, setServers] = useState<any[]>([]);
    
    useEffect(() => {
        (async () => {
            const response = await fetch("/api/user/servers");

            if (!response.ok) return;

            const data = await response.json();
            setServers(data.guilds);
        })();
    }, []);

    return (
        <main className="w-250 min-h-[calc(100vh-138px)] mx-auto">
            <section>
                <Panel title="Servers">
                    {servers.map(server => <ServerCard key={server.id} data={server} />)}
                </Panel>

                <Panel title="Settings">
                    
                </Panel>
            </section>
        </main>
    );
}

function Panel({ title, children, ...rest }: any) {
    return (
        <div className="p-3.5 rounded-md bg-zinc-800" {...rest}>
            <strong className="block text-sm leading-none font-semibold text-zinc-400/75 select-none">{title}</strong>
            {children}
        </div>
    );
}

function ServerCard({ data }: any) {
    return (
        <div className="p-2.5 rounded-md mt-2 flex justify-between items-center bg-zinc-700/60">
            <div>
                <img src={`https://cdn.discordapp.com/icons/${data.id}/${data.icon}.png`} alt={data.name} draggable={false} className="w-11 h-11 rounded-full object-cover select-none inline-block align-middle" />
                <div className="inline-block align-middle ml-2.5">
                    <strong className="text-white font-semibold">{data.name}</strong>
                    <div className="text-zinc-400 mt-0.5 text-xs">Permissions: {data.permissions_new}</div>
                </div>
            </div>

            <div className="mr-1.5">
                <ServerOption icon={faXmark} title="Remove Server" onClick={() => {}} />
            </div>
        </div>
    );
}

function ServerOption({ icon, ...rest }: any) {
    return <div className="py-2 px-2.5 leading-none rounded-md bg-zinc-700 text-zinc-400 select-none cursor-pointer duration-200 hover:bg-red-400 hover:text-white active:bg-red-400/75 active:text-white" {...rest}><FontAwesomeIcon icon={icon} /></div>;
}