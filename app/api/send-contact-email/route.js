// api/send-contact-email/route.js
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const { name, email, phone } = await req.json(); // Recibir el nuevo campo 'message'

    const data = await resend.emails.send({
      from: 'CIRCULO SISTEMICO - CONTACTO <onboarding@resend.dev>', // Replace with your sender email
      to: 'circulosistemico1@gmail.com',
      subject: "TENES UN NUEVO MENSAJE",
      html: `<p> ${name} te dejó un mensaje:</p>
             <p>Para comunicarte, puedes enviar un mensaje a ${email} o hablar al ${phone}.</p>`,
    });
    console.log(data);
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}