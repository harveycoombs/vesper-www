import fetch from "node-fetch";

export async function getBotGuilds() {
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

    return await response.json();
}