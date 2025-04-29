"use server";
import pool from "./database";

export async function getNews(): Promise<any[]> {
    const [result]: any = await pool.query("SELECT * FROM news ORDER BY publish_date DESC");
    return result;
}

export async function getNewsArticle(id: string): Promise<any> {
    const [result]: any = await pool.query("SELECT * FROM news WHERE id = ?", [id]);
    return result[0];
}