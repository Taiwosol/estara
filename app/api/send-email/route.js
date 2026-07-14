import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email, source, message } = await request.json();

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ayanrindetaiwo2@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Define email options
    const mailOptions = {
      from: email,
      to: "ayanrindetaiwo2@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div>
          <h1>New Contact Form Submission</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>How did you hear about us:</strong> ${source}</p>
          <p><strong>Message:</strong> ${message}</p>
        </div>
      `,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent: " + info.response);

    return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
