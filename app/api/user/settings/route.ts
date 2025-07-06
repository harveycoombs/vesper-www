import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

import { getUserSettings, updateUserSettings } from "@/lib/users";

export async function GET(request: NextRequest) {
    const token = request.cookies.get("token");
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user: any = jwt.verify(token.value, process.env.JWT_SECRET ?? "");
    const settings = await getUserSettings(user.id);

    return NextResponse.json({ settings });
}

export async function POST(request: NextRequest) {
    const token = request.cookies.get("token");
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user: any = jwt.verify(token.value, process.env.JWT_SECRET ?? "");

    const data = await request.formData();
    const model = data.get("model")?.toString() ?? "";

    const updated = await updateUserSettings(user.id, model);

    return NextResponse.json({ updated });
}