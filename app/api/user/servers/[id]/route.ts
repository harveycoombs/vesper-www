import { NextResponse } from "next/server";
import { leaveGuild } from "@/lib/bot";

export async function DELETE(_: any, { params }: any) {
    const { id } = await params;

    try {
        await leaveGuild(id);
        return NextResponse.json({ message: "Guild left successfully." });
    } catch (ex: any) {
        return NextResponse.json({ error: ex.message }, { status: 500 });
    }
}