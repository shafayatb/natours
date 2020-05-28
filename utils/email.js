const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  //   const transporter = nodemailer.createTransport({
  //     service: 'Gmail',
  //     auth: {
  //       user: process.env.EMAIL_USERNAME,
  //       password: process.env.EMAIL_PASSWORD
  //     }
  //     Activate less secure app option in gmail acc
  //   });

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  const mailOptions = {
    from: 'Admin User <hello@jonas.io>',
    to: options.email,
    subject: options.subject,
    text: options.message
    //html: 
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
