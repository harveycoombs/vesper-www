import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
    const data = await request.formData();

    const name = data.get("name")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";

    if (!name.length || !email.length || !message.length) return NextResponse.json({ error: "One or more fields were not provided." }, { status: 400 });

    try {
        const resend = new Resend(process.env.RESEND_API_KEY ?? "");

        const result = await resend.emails.send({
            from: email,
            to: "contact@harveycoombs.com",
            subject: `${name} - Vesper Enquiry`,
            html: `<p>${message}</p>`
        });

        return NextResponse.json({ result });
    } catch (ex: any) {
        console.error(ex);
        return NextResponse.json({ error: "Unable to submit enquiry." }, { status: 500 });
    }
}