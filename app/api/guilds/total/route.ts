import { NextResponse } from "next/server";
import { createClient } from "redis";

export async function GET(_: Request) {
    try {
        const client = createClient({
            url: process.env.REDIS_URL ?? "",
            socket: {
                connectTimeout: 15000,
                keepAlive: true,
                reconnectStrategy: (retries) => Math.min(retries * 50, 1000)
            }
        }); 

        client.on("error", (err) => console.error("Redis Client Error", err));

        await client.connect();
        const total = await client.get("guild_count") ?? "0";

        await client.quit();

        return NextResponse.json({ total: parseInt(total) });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch guild count" }, { status: 500 });
    }
}