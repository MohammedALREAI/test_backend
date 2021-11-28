const mailer  = require('nodemailer')

require('dotenv').config()




const transporter = mailer.createTransport({
    service: 'Gmail',
    secureConnection: false,

    auth: {
        user: process.env.EMAIL_USERNAME|| "teste36514@gmail.com",
        pass: process.env.EMAIL_PASSWORD||"test@1234",
    },
    tls: {
        rejectUnauthorized: false
    }
  })







module.exports = transporter