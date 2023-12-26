import nodemailer from "nodemailer"
export const transporter= nodemailer.createTransport({
    host: "smtppro.zoho.in", 
    secure: true, 
    port: 465, 
    auth: { 
        user: process.env.EMAIL_SENDER, 
        pass: process.env.EMAIL_PASSWORD, 
    },

});