import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: "Email is required" }, { status: 400 });
        }

        console.log(`[Book Demo] Sending email to jingxuansd@gmail.com`);

        const data = await resend.emails.send({
            from: "E-commerce Data API <noreply@koay.top>",
            to: "jingxuansd@gmail.com",
            subject: "New Demo Request",
            html: `<p>User <strong>${email}</strong> has requested a demo.</p>`,
        });

        if (data.error) {
            console.error("Resend Error:", data.error);
            return NextResponse.json({ error: data.error.message }, { status: 500 });
        }

        console.log("[Book Demo] Email sent successfully:", data);

        return NextResponse.json({ success: true, message: "Demo request received" });
    } catch (error) {
        console.error("Error processing demo request:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
