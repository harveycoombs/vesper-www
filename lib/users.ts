import pool from "@/lib/database";

export async function getUserSettings(userid: string): Promise<any> {
    const [result]: any = await pool.query("SELECT * FROM user_settings WHERE user_id = ?", [userid]);
    return result[0];
}

export async function updateUserSettings(userid: string, model: string): Promise<boolean> {
    const [result]: any = await pool.query("UPDATE user_settings SET model = ? WHERE user_id = ?", [model, userid]);
    return result.affectedRows > 0;
}