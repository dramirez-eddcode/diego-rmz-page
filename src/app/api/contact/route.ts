import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message, projectType } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Todos los campos son requeridos' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Formato de email inválido' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: process.env.FROM_EMAIL || 'notifications@notifications.eddcode.com',
      to: [process.env.CONTACT_EMAIL || 'dramirez@eddcode.com'],
      subject: `Nuevo contacto desde portfolio: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #172A39; border-bottom: 2px solid #FC573B; padding-bottom: 10px;">
            Nuevo mensaje de contacto
          </h2>
          
          <div style="background-color: #E9E1DE; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #172A39; margin-top: 0;">Información del contacto:</h3>
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
            ${projectType ? `<p><strong>Tipo de proyecto:</strong> ${projectType}</p>` : ''}
          </div>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #FC573B;">
            <h3 style="color: #172A39; margin-top: 0;">Mensaje:</h3>
            <p style="line-height: 1.6; color: #172A39;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #172A39; color: white; border-radius: 8px; text-align: center;">
            <p style="margin: 0;">
              <strong>Responder directamente a:</strong> 
              <a href="mailto:${email}" style="color: #FC573B; text-decoration: none;">${email}</a>
            </p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px; text-align: center;">
            Este mensaje fue enviado desde tu portfolio web - Diego Ramírez
          </p>
        </div>
      `,
    });

    return NextResponse.json(
      { 
        message: 'Email enviado exitosamente',
        emailId: emailData.data?.id 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { error: 'Error interno del servidor al enviar el email' },
      { status: 500 }
    );
  }
}