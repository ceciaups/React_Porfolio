const express = require("express");
const http = require("http");
const nodemailer = require("nodemailer");
const multiparty = require("multiparty");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

app.use(cors({origin: "https://ceciaups.vercel.app"}));

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL,
    pass: process.env.PASSWORD
  }
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/api/send", (req, res) => {
  let form = new multiparty.Form();
  let data = {};
  form.parse(req, function (err, fields) {
    Object.keys(fields).forEach(function (property) {
      data[property] = fields[property].toString();
    });
    const mail = {
      from: process.env.GMAIL,
      to: process.env.GMAIL,
      subject: '[Portfolio] New Form submission',
      text: `You have received a new message from ${data.fname} \n` +
      `Email: <${data.femail}> \n` + 
      `Here is the message: ${data.fmessage}`,
    };
    transporter.sendMail(mail, (err, data) => {
      if (err) {
        console.log(err);
        res.sendStatus(500);
      } else {
        console.log('Email sent:' + data.response);
        res.sendStatus(200);
      }
    });
  });
});

const httpServer = http.createServer(app);

httpServer.listen(80, function() {
  console.log("hello world");
})

module.exports = app;