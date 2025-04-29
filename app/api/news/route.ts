import { NextResponse } from "next/server";

import { getNews } from "@/lib/news";

export async function GET(_: Request): Promise<NextResponse> {
    const news = await getNews();
    return NextResponse.json({ news });
}