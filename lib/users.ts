import pool from "@/lib/database";

export async function getUserSettings(userid: string): Promise<any> {
    const result = await pool.query("SELECT * FROM vesper.user_settings WHERE user_id = $1", [userid]);
    return result.rows[0];
}

export async function updateUserSettings(userid: string, model: string): Promise<boolean> {
    const result = await pool.query("UPDATE vesper.user_settings SET model = $1 WHERE user_id = $2", [model, userid]);
    return result.rowCount ? result.rowCount > 0 : false;
}