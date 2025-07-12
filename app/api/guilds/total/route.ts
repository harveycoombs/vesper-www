import { NextResponse } from "next/server";
import { createClient } from "redis";

export async function GET(_: Request) {
    const client = createClient({
        url: process.env.REDIS_URL ?? ""
    }); 

    await client.connect();
    const total = await client.get("guild_count") ?? "0";

    return NextResponse.json({ total: parseInt(total) });
}