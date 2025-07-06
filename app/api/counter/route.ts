import { NextResponse } from "next/server";

import { getTotalRegisteredGuilds } from "@/lib/guilds";

export async function GET(_: Request): Promise<NextResponse> {
    const count = await getTotalRegisteredGuilds();
    return NextResponse.json({ count });
}