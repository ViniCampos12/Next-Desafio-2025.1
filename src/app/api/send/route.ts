import type { NextApiRequest, NextApiResponse } from 'next';
import KoalaWelcomeEmail from '@/components/email/email-template';
import { Resend } from 'resend';
import { FormValue } from '@/schema/form';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<Response> {
  try {
    const body: FormValue = await request.json();
    const { data, error } = await resend.emails.send({
      from: 'Vinishoes <onboarding@resend.dev>',
      to: ['delivered@resend.dev'], //Vai ter que usar esse email mesmo de teste (chega lá no site do resend)
      subject: 'Vinishoes',
      react: KoalaWelcomeEmail({ userName: body.name, userEmail: body.email, subject: body.subject, description: body.description}),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({data}, {status: 200});
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}