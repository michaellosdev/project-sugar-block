import nodemailer, { Transporter, SentMessageInfo } from "nodemailer";
import { NextResponse } from "next/server";

interface Message {
  email: string;
  messageBody: string;
  fullName: string;
  tel: string;
}

export async function POST(request: { json: () => Promise<Message> }) {
  const { email, messageBody, fullName, tel } = await request.json();

  const message = {
    from: email,
    to: "mishaloskutov@gmail.com",
    subject: fullName,
    text: `Name: ${fullName}\nPhone: ${tel} \nEmail: ${email}\nMessage: ${messageBody}`,
  };

  const transporter: Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NEXT_PUBLIC_GOOGLE_ACCESS_EMAIL,
      pass: process.env.NEXT_PUBLIC_GOOGLE_ACCESS_PASSWORD,
    },
  });

  try {
    // console.log(message);
    const info: SentMessageInfo = await transporter.sendMail(message);

    return NextResponse.json({ message: "Email sent", info });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Email failed to send" });
  }
}

// export const GET = async (request) => {
//   return new Response(JSON.stringify({ message: "Hello world" }));
// };
