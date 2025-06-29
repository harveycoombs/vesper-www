import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
    const token = request.cookies.get("token");
    if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = jwt.verify(token.value, process.env.JWT_SECRET ?? "");

    return NextResponse.json({ user });
}