import nodemailer from "nodemailer";

const TransPorter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 587,
  secure: true,
  auth: {
    user: "hk8051871496@gmail.com",
    pass: "erhl lhmf onwi ljgv",
  },
});


const SendEmail = async (email, Subject, PlaneText) => {
  await TransPorter.sendMail({
    from: {
      name: "Harshvardhan kumar",
      address: "hk8051871496@gmail.com",
    },
    to: email,
    subject: Subject,
    text: PlaneText,
  });
};

export { TransPorter, SendEmail };