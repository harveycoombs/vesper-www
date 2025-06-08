"use server";
import pool from "./database";

export default async function getServerCount(): Promise<number> {
	const [result]: any = await pool.query("SELECT server_count FROM bot_stats");
	return result[0]?.server_count ?? 0;
}