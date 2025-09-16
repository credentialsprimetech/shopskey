
import nodemailer from "nodemailer";

export async function POST(request) {
  console.log("API route hit!"); // Debug log

  try {
    const formData = await request.json();
    console.log("Form data received:", formData); // Debug log

    const { fullName, phone, email, service, budget, details } = formData;

    // Input validation
    // if (!phone || !email) {
    //   return Response.json(
    //     { error: "Required fields missing" },
    //     { status: 400 }
    //   );
    // }

    // Transporter configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Service names mapping
    const serviceNames = {
      seo: "SEO",
      smm: "Social Media Marketing",
      web: "Web Development",
      logo: "Logo Design & Branding",
      website: "Website Design & Development",
      ppc: "Pay Per Click (PPC)",
      content: "Content Marketing",
    };

    // Admin email content
    const adminEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1 style="color: #007bff; text-align: center; margin-bottom: 30px;">
          🚀 New Proposal Request Shopskey
        </h1>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0;">Client Information</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Email:</strong> ${email}</p>
        </div>

        <div style="background-color: #e3f2fd; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0;">Service Details</h2>
          <p><strong>Service:</strong> ${serviceNames[service] || service}</p>
          <p><strong>Budget:</strong> $${budget || "Not specified"}</p>
        </div>

        ${
          details
            ? `
        <div style="background-color: #fff3e0; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #333; margin-top: 0;">Project Details</h2>
          <p>${details}</p>
        </div>
        `
            : ""
        }

        <p style="color: #666; text-align: center; margin-top: 30px;">
          Submitted on: ${new Date().toLocaleString()}
        </p>
      </div>
    `;

    // Client confirmation email
    const clientEmailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #007bff; color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
          <h1 style="margin: 0;">Thank You ${fullName}! 🎉</h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #ddd;">
          <p style="font-size: 16px; margin-bottom: 20px;">
            We've received your request for <strong>${
              serviceNames[service] || service
            }</strong>
          </p>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #007bff; margin-top: 0;">What happens next?</h3>
            <ul style="line-height: 1.8;">
              <li>Our team will review your requirements</li>
              <li>We'll contact you within 24 hours</li>
              <li>We'll prepare a customized proposal</li>
            </ul>
          </div>
          
          <p>Budget Range: <strong>$${budget || "To be discussed"}</strong></p>
          
          <p style="margin-top: 30px;">
            Best regards,<br>
            <strong>Your Team</strong>
          </p>
        </div>
      </div>
    `;

    // Email options for admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Proposal Request - ${serviceNames[service] || service}`,
      html: adminEmailHTML,
      replyTo: email,
    };

    // Email options for client
    const clientMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for your inquiry - We'll be in touch soon!",
      html: clientEmailHTML,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    console.log("Emails sent successfully!"); // Debug log

    return Response.json(
      {
        success: true,
        message: "Proposal request sent successfully!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return Response.json(
      {
        error: "Failed to send proposal request",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

// Test GET method (optional - for testing)
export async function GET() {
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS);
  console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);

  return Response.json({
    message: "API is working!",
    checking: process.env.EMAIL_USER,
    checking2: process.env.EMAIL_PASS,
  });
}
