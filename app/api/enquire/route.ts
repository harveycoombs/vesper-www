import { NextResponse } from "next/server";
import { EmailParams, Recipient } from "mailersend";

import sendEmail from "@/lib/mail";

export async function POST(request: Request) {
    const data = await request.formData();

    const name = data.get("name")?.toString() ?? "";
    const email = data.get("email")?.toString() ?? "";
    const message = data.get("message")?.toString() ?? "";

    if (!name.length || !email.length || !message.length) return NextResponse.json({ error: "One or more fields were not provided." }, { status: 400 });

    try {
        const recipients = [new Recipient("contact@harveycoombs.com", "Harvey Coombs")];
        
        const emailParams = new EmailParams()
            .setFrom({ email, name })
            .setSubject(`${name} - Vesper Enquiry`)
            .setHtml(`<p>${message}</p>`);
    
        await sendEmail(emailParams, recipients);
    } catch (ex: any) {
        console.error(ex);
    }

    return NextResponse.json({ message: "Enquiry received" });
}