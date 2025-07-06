"use server";
import fetch from "node-fetch";

import pool from "@/lib/database";

export async function getBotGuilds(): Promise<any[]> {
    const response = await fetch("https://discord.com/api/users/@me/guilds", {
        headers: {
            "Authorization": `Bot ${process.env.DISCORD_BOT_TOKEN}`,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to fetch bot guilds (${response.status}): ${text}`);
    }

    return await response.json() as any[];
}

export async function leaveGuild(guildid: string) {
    const response = await fetch(`https://discord.com/api/users/@me/${guildid}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bot ${process.env.DISCORD_BOT_TOKEN}`,
            "Content-Type": "application/json"
        }
    });

    if (!response.ok) {
        const text = await response.text();
        throw new Error(`Failed to leave guild (${response.status}): ${text}`);
    }

    return await response.json();
}

export async function getRegisteredGuilds(userid: string): Promise<any[]> {
    const [result]: any = await pool.query("SELECT * FROM registered_guilds WHERE owner_id = ?", [userid]);
    return result;
}

export async function getTotalRegisteredGuilds(): Promise<number> {
	const [result]: any = await pool.query("SELECT COUNT(*) as total FROM registered_guilds");
	return result[0]?.total ?? 0;
}

export async function deregisterGuild(guildid: string): Promise<boolean> {
    const [result]: any = await pool.query("DELETE FROM registered_guilds WHERE guild_id = ?", [guildid]);
    return result.affectedRows > 0;
}