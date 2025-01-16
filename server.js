const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (CSS, JS, etc.)
app.use(express.static('public'));

// Send email after form submission
app.post('/send-message', (req, res) => {
    const { name, email, phone, message } = req.body;

    // Configure Nodemailer transport
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password', // Consider using environment variables for this
        },
    });

    // Email details
    const mailOptions = {
        from: email, // sender address
        to: 'matt123.3a@gmail.com', // your email
        subject: `Message from ${name} - ${email}`, // Subject line
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage:\n\n${message}`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Error sending message. Please try again later.' });
        }
        console.log('Message sent: %s', info.messageId);
        return res.status(200).json({ message: 'Your message has been sent successfully!' });
    });
});

// Handle form submission
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
