"use client";
import { useState, useEffect } from "react";

export default function Manage() {
    const [servers, setServers] = useState<any[]>([{
        guild_id: "1234567890",
    }]);
    
    useEffect(() => {
        (async () => {
            const response = await fetch("/api/servers");

            if (!response.ok) return;

            const data = await response.json();
            setServers(data.servers);
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
            <strong className="block text-sm leading-none font-semibold text-zinc-400/75">{title}</strong>
            {children}
        </div>
    );
}

function ServerCard({ data }: any) {
    return (
        <div>
            
        </div>
    );
}