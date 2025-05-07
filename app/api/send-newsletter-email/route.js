// api/send-contact-email/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const { email } = await req.json(); // Recibir el nuevo campo 'message'

    const data = await resend.emails.send({
      from: 'CIRCULO SISTEMICO - NOVEDAD <onboarding@resend.dev>', // Replace with your sender email
      to: 'circulosistemico1@gmail.com',
      subject: "NOVEDAD",
      html: `
             <p><strong>Espero recibir noticias:</strong> ${email}</p>
             `,
    });
    console.log(data);
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}