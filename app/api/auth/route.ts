import { NextRequest, NextResponse } from "next/server";
import fetch from "node-fetch";
import jwt from "jsonwebtoken";

export async function GET(request: NextRequest) {
    try {
        const code = new URL(request.url).searchParams.get("code") ?? "";

        if (!code) return NextResponse.json({ error: "Missing code" }, { status: 400 });
    
        const tokenResponse = await fetch("https://discord.com/api/oauth2/token", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                client_id: process.env.DISCORD_CLIENT_ID ?? "",
                client_secret: process.env.DISCORD_CLIENT_SECRET ?? "",
                grant_type: "authorization_code",
                code,
                redirect_uri: "https://vesper.gg/api/auth",
                scope: "identify"
            })
        });

        if (!tokenResponse.ok) return NextResponse.json({ error: "Unable to exchange code for access token.", details: tokenResponse }, { status: 400 });
    
        const details: any = await tokenResponse.json();
    
        if (!details?.access_token?.length) return NextResponse.json({ error: "Unable to exchange code for access token.", details: details }, { status: 400 });
    
        const userResponse = await fetch("https://discord.com/api/users/@me", {
            headers: {
                Authorization: `Bearer ${details.access_token}`,
            }
        });
    
        if (!userResponse.ok) return NextResponse.json({ error: "Unable to fetch user details.", details: userResponse }, { status: 400 });

        const user: any = await userResponse.json();
    
        if (!user?.id?.length) return NextResponse.json({ error: "Unable to fetch user details.", details: user }, { status: 400 });
    
        const credentials = user && jwt.sign({
            id: user.id,
            username: user.username,
            avatar: user.avatar,
        }, process.env.JWT_SECRET ?? "");
    
        const response = NextResponse.redirect("https://vesper.gg/");
    
        response.cookies.set("token", credentials, {
            httpOnly: true,
            secure: true,
            maxAge: 3155760000
        });
    
        return response;
    } catch (ex: any) {
        return NextResponse.json({ error: "An error occurred while exchanging code for access token.", details: ex.message }, { status: 400 });
    }
}

export async function DELETE(_: NextRequest) {
    const response = NextResponse.json({ success: true });
    response.cookies.delete("token");

    return response;
}