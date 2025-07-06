import { NextResponse } from "next/server";
import { deregisterGuild, leaveGuild } from "@/lib/guilds";

export async function DELETE(_: any, { params }: any) {
    const { id } = await params;

    try {
        const left = await leaveGuild(id);
        const deregistered = await deregisterGuild(id);

        if (!left || !deregistered) {
            return NextResponse.json({ error: "Failed to leave guild." }, { status: 500 });
        }

        return NextResponse.json({ message: "Guild left successfully." });
    } catch (ex: any) {
        return NextResponse.json({ error: ex.message }, { status: 500 });
    }
}