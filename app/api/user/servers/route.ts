import { NextResponse } from "next/server";
import { getBotGuilds } from "@/lib/bot";

export async function GET(_: any) {
    try {
        const guilds = await getBotGuilds();
        return NextResponse.json({ guilds });
    } catch (ex: any) {
        return NextResponse.json({ error: ex.message }, { status: 500 });
    }
}