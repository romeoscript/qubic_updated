import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create a transporter using Zoho SMTP
const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true, // use SSL
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const { name, email, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Send email to Qubic team
    const teamMailOptions = {
      from: `QUBIC <${process.env.EMAIL_USER}>`,
      to: ['romeobourne211@gmail.com', 'benjaminparish6@gmail.com'],
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service Interested In:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // Send confirmation email to the user
    const userMailOptions = {
      from: `QUBIC <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Thank you for contacting Qubic Studio',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb;">Thank you for reaching out to Qubic Studio!</h2>
          
          <p>Dear ${name},</p>
          
          <p>We have received your message and appreciate you taking the time to contact us. Here's a summary of your submission:</p>
          
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Service Interested In:</strong> ${service}</p>
            <p><strong>Your Message:</strong></p>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          
          <p>Our team will review your inquiry and get back to you as soon as possible. In the meantime, if you have any urgent questions, you can:</p>
          
          <ul style="list-style-type: none; padding-left: 0;">
            <li style="margin-bottom: 10px;">📞 Schedule a call: <a href="https://calendly.com/romeobourne211/30min" style="color: #2563eb; text-decoration: none;">Book a 30-minute consultation</a></li>
            <li style="margin-bottom: 10px;">✉️ Email us directly: <a href="mailto:info@qubic.com.ng" style="color: #2563eb; text-decoration: none;">info@qubic.com.ng</a></li>
          </ul>
          
          <p>Best regards,<br>The Qubic Studio Team</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          
          <p style="color: #6b7280; font-size: 0.875rem;">
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(teamMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
} 