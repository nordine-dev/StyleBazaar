import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
    host: process.env.STMP_HOST,
    port: process.env.STMP_PORT,
    secure: process.env.STMP_SUCURE === "true",
    auth: {
        user: process.env.STMP_USER,
        pass: process.env.STMP_PASSWORD,
    },
    tls: {
        rejectUnauthorized: false
    }
})

