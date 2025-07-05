"use server";
import pool from "./database";

export async function getRegisteredGuilds(userid: string): Promise<any[]> {
    const [result]: any = await pool.query("SELECT * FROM registered_guilds WHERE owner_id = ?", [userid]);
    return result;
}