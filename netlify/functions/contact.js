const nodemailer = require('nodemailer');

exports.handler = async (event, context) => {
  try {
    const { name, email, message} = JSON.parse(event.body);

    // Setup nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      secure: true,
      port: 465,
      auth: {
        user: 'mahboobalam7131@gmail.com',
        pass: 'qtnm hggd jthl gked'
      }
    });

    const mailOptions = {
      from: email,
      to: 'mahboobalam7131@gmail.com',
      subject: `New message from ${name} ${email}`,
      text: `${message}`
    };

    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Message sent successfully' })
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.toString() })
    };
  }
};
