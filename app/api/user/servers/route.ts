import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { getBotGuilds } from "@/lib/bot";
import { getRegisteredGuilds } from "@/lib/data";

export async function GET(request: NextRequest) {
    const token = request.cookies.get("token");
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user: any = jwt.verify(token.value, process.env.JWT_SECRET ?? "");

    try {
        const botGuilds: any[] = await getBotGuilds();
        const ownGuilds = await getRegisteredGuilds(user.id);

        const guilds = ownGuilds.map((guild: any) => {
            const botGuild = botGuilds.find((g: any) => g.id == guild.guild_id);

            return {
                ...botGuild,
                owner_id: guild.owner_id
            };
        });

        return NextResponse.json({ guilds });
    } catch (ex: any) {
        return NextResponse.json({ error: ex.message }, { status: 500 });
    }
}