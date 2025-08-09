// import { NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';


// export async function POST(req: Request) {
//   try {
//     const { name, email,phone, message } = await req.json();

//     // Create transporter
//     console.log(email);
//     console.log(process.env.SMTP_USER);
//     const transporter = nodemailer.createTransport({
//       service: 'gmail', // or SMTP settings
//       auth: {
//         user: process.env.SMTP_USER,
//         pass: process.env.SMTP_PASS,
//       },
//     });

//     // Send email
//     await transporter.sendMail({
//       from: process.env.SMTP_USER,
//       to: process.env.SMTP_TO, // your email
//       subject: `New Contact Form Submission from ${name} | Astronova website`,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Phone: ${phone}
//         Message: ${message}
//       `,
//     });

//     return NextResponse.json({ success: true }, { status: 200 });
//   } catch (error) {
//     console.error('Email sending error:', error);
//     return NextResponse.json({ error: 'Email failed to send' }, { status: 500 });
//   }
// }

import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_TO,
      subject: `New Contact Form Submission from ${name} | Astronova website`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'Email failed to send' }, { status: 500 });
  }
}
