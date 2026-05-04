import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, interest, message } = await req.json();

  try {
    await resend.emails.send({
      from: "Web JANKU CZ <noreply@jipa.cz>",
      to: ["objednavky@jipa.cz"],
      cc: ["janku@jiri-janku.cz"],
      replyTo: email,
      subject: `Nová poptávka od ${name}`,
      html: `
        <h2 style="font-family:sans-serif;color:#27187e;">Nová poptávka z webu JANKU CZ</h2>
        <table style="font-family:sans-serif;font-size:15px;line-height:1.6;border-collapse:collapse;">
          <tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap"><strong>Jméno:</strong></td><td>${name}</td></tr>
          <tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap"><strong>E-mail:</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
          ${phone ? `<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap"><strong>Telefon:</strong></td><td>${phone}</td></tr>` : ""}
          ${interest ? `<tr><td style="padding:4px 12px 4px 0;color:#666;white-space:nowrap"><strong>Zájem o:</strong></td><td>${interest}</td></tr>` : ""}
        </table>
        ${message ? `<p style="font-family:sans-serif;font-size:15px;margin-top:16px;"><strong>Zpráva:</strong><br>${message.replace(/\n/g, "<br>")}</p>` : ""}
        <hr style="margin-top:24px;border:none;border-top:1px solid #eee;">
        <p style="font-family:sans-serif;font-size:12px;color:#999;">Odesláno z kontaktního formuláře na webu JANKU CZ</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Odeslání selhalo." }, { status: 500 });
  }
}
