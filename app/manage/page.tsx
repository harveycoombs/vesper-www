"use client";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import Panel from "@/app/components/common/Panel";
import Button from "@/app/components/common/Button";
import Menu from "@/app/components/common/Menu";

async function removeServer(id: string, target: any) {
    const response = await fetch(`/api/user/servers/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) return;

    target.closest("article")?.remove();
}

export default function Manage() {
    const [servers, setServers] = useState<any[]>([]);
    const [serversLoading, setServersLoading] = useState<boolean>(false);

    useEffect(() => {
        setServersLoading(true);

        (async () => {
            const response = await fetch("/api/user/servers");

            setServersLoading(false);

            if (!response.ok) return;

            const data = await response.json();
            setServers(data.guilds);
        })();
    }, []);

    async function logout() {

    }

    return (
        <main className="w-250 min-h-[calc(100vh-138px)] mx-auto pt-4.5">
            <section>
                <Panel title="Servers" classes="mb-4" loading={serversLoading}>
                    {servers.map(server => <ServerCard key={server.id} data={server} />)}
                </Panel>

                <div className="flex gap-4">
                    <Panel title="Bot Settings" classes="w-1/2">
                        <FieldContainer title="Model">
                            <Menu defaultValue="qwen-3-30b-a3b">
                                <option value="qwen-3-30b-a3b">Qwen 3 30B A3B (IQ3_M quantized)</option>
                                <option value="llama-4-scout-17b-16e">Llama 4 Scout 17B 16E Instruct (IQ1_M quantized)</option>
                                <option value="gemma-3-27b-it">Gemma 3 27B IT</option>
                            </Menu>
                        </FieldContainer>
                    </Panel>

                    <Panel title="Account Settings" classes="w-1/2">
                        <Button onClick={logout}>Log Out</Button>
                    </Panel>
                </div>
            </section>
        </main>
    );
}

function ServerCard({ data }: any) {
    return (
        <article className="p-4 mt-3 flex justify-between items-center bg-zinc-800/80 rounded-xl backdrop-blur-lg border border-white/5 shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.05),inset_2px_2px_4px_rgba(0,0,0,0.3)] transition-all duration-300 hover:shadow-[inset_-3px_-3px_6px_rgba(255,255,255,0.07),inset_3px_3px_6px_rgba(0,0,0,0.4)] hover:bg-zinc-800/90">
            <div className="flex items-center">
                <div className="relative">
                    {data.icon ? <img 
                        src={`https://cdn.discordapp.com/icons/${data.id}/${data.icon}.png`} 
                        alt={data.name} 
                        draggable={false} 
                        className="w-12 h-12 rounded-xl object-cover select-none shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105" 
                    /> : <div className="w-12 h-12 rounded-xl grid place-items-center text-lg bg-zinc-700/80 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105">{data.name.charAt(0)}</div>}
                    <div className="absolute inset-0 rounded-xl shadow-[inset_-1px_-1px_2px_rgba(255,255,255,0.1),inset_1px_1px_2px_rgba(0,0,0,0.2)]"></div>
                </div>
                <div className="ml-4">
                    <strong className="block text-white font-medium tracking-wide">{data.name}</strong>
                    <div className="text-zinc-400 mt-1 text-xs font-medium tracking-wide">Permissions: {data.permissions_new}</div>
                </div>
            </div>

            <div>
                <ServerOption icon={faXmark} title="Remove Server" onClick={(e: any) => removeServer(data.id, e.target)} />
            </div>
        </article>
    );
}

function ServerOption({ icon, ...rest }: any) {
    return (
        <div 
            className="py-1.75 px-3 rounded-lg bg-zinc-700/80 text-zinc-400 select-none cursor-pointer backdrop-blur-sm border border-white/5 shadow-[inset_-1px_-1px_2px_rgba(255,255,255,0.05),inset_1px_1px_2px_rgba(0,0,0,0.2)] transition-all duration-300 hover:shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.07),inset_2px_2px_4px_rgba(0,0,0,0.3),0_4px_15px_rgba(239,68,68,0.2)] hover:bg-red-600/60 hover:text-white active:scale-95" 
            {...rest}
        >
            <FontAwesomeIcon icon={icon} className="text-lg" />
        </div>
    );
}

function FieldContainer({ title, children, ...rest}: any) {
    return (
        <div className="flex items-center justify-between" {...rest}>
            <div className="text-zinc-400 text-sm">{title}</div>
            {children}
        </div>
    );
}