import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  // Check if Resend is configured
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email service not configured. Please contact directly at your email.' },
      { status: 503 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, company, projectType, budget, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'your@email.com',
      subject: `New Project Inquiry from ${name}`,
      html: `
        <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #CCFF00; background: #000; padding: 20px; margin: 0;">New Project Inquiry</h1>

          <div style="padding: 30px; background: #f5f5f5;">
            <h2 style="color: #000; margin-top: 0;">Contact Information</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}

            ${projectType ? `
              <h2 style="color: #000; margin-top: 30px;">Project Details</h2>
              <p><strong>Project Type:</strong> ${projectType}</p>
            ` : ''}

            ${budget ? `<p><strong>Budget:</strong> ${budget}</p>` : ''}

            <h2 style="color: #000; margin-top: 30px;">Message</h2>
            <div style="background: white; padding: 20px; border-left: 4px solid #CCFF00; white-space: pre-wrap;">
${message}
            </div>
          </div>

          <div style="padding: 20px; background: #000; color: #666; text-align: center; font-size: 12px;">
            <p>This email was sent from your portfolio contact form</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, messageId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
