const nodemailer = require("nodemailer");
const dayjs = require("dayjs");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASS,
  },
});

const sendConfirmationEmail = (customerEmail, services) => {

  const mailOptions = {
    from: process.env.MAIL_USERNAME,
    to: customerEmail,
    subject: "Service Purchase Confirmation",
    html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.5;">
            <h2 style="color: #333;">Thank you for purchasing Ophela Services!</h2>
            <p>We have scheduled the following services for you:</p>
           <ul style="margin-left: 20px;">
          ${services
            .map(
              ({ name, date }) =>
                `<li><strong>${name}</strong> - Scheduled for: ${dayjs(
                  date
                ).format("MM-DD-YYYY hh:mm A")}</li>`
            )
            .join("")}
        </ul>
        <p style="margin-top: 20px;">We look forward to providing you with excellent service.</p>
        <p style="font-size: 0.9em; color: #555;">If you have any questions, feel free to contact us at <a href="mailto:ophela.helps@gmail.com">ophela.helps  @gmail.com</a> or visit our website at <a href="https://www.ophelaservices.com">www.ophelaservices.com</a>.</p>
          </div>
        `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log("Error while sending email:", error);
    }
  });
};

module.exports = { sendConfirmationEmail };
