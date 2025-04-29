"use server";
import pool from "./database";

export async function getServerCount(): Promise<number> {
	const [result]: any = await pool.query("SELECT server_count FROM bot_stats");
	return result[0]?.server_count ?? 0;
}

export async function updateServerCount(count: number): Promise<void> {
    await pool.query("UPDATE bot_stats SET server_count = ?", [count]);
}