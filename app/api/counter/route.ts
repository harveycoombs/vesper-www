import { NextResponse } from "next/server";

import { getServerCount, updateServerCount } from "@/lib/counter";

export async function GET(_: Request): Promise<NextResponse> {
    const count = await getServerCount();
    return NextResponse.json({ count });
}

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const { count, token } = await request.json();

        if (!token?.length) return NextResponse.json({ error: "Unauthorised." }, { status: 401 });
    
        await updateServerCount(count);
    
        return NextResponse.json({ message: "Updated." });
    } catch (ex: any) {
        return NextResponse.json({ message: ex.message }, { status: 500 });
    }
}