import { NextResponse } from "next/server";

import { getNewsArticle } from "@/lib/news";

export async function GET(_: Request, { params }: any): Promise<NextResponse> {
    const { id } = await params;
    const news = await getNewsArticle(id);
    return NextResponse.json({ news });
}