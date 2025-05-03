import { NextResponse } from "next/server";

import getServerCount from "@/lib/counter";

export async function GET(_: Request): Promise<NextResponse> {
    const count = await getServerCount();
    return NextResponse.json({ count });
}