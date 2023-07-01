const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Send Email endpoint
app.post('/send-email', (req, res) => {
  const { name, email, message } = req.body;

  // Create a transporter using your Gmail account credentials
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'kharel.kumud02@gmail.com',
      pass: 'zgvpooegsdxsozjk
      ',
    },
  });

  // Compose the email
  const mailOptions = {
    from: 'kharel.kumud02@gmail.com',
    to: 'admin@testamplify.io',
    subject: 'New Contact Form Submission',
    text: `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
