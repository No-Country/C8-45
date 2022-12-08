import nodemailer from "nodemailer"
import { google } from "googleapis"

interface mailOptions {
    from: string
    to: string
    subject: string,
    text?: string,
}
export class MailService {
    oauth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET,
        process.env.REDIRECT_URL)
    transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "checksiteservice@gmail.com",
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
        }
    })
    MailOptions!: mailOptions
    constructor() {
        this.oauth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN })

    }
    async sendRegisterMail(mail: string, subject: string,text:string) {
        this.MailOptions = {
            from: mail,
            to: mail,
            subject: subject,
            text:text
        }
        await this.transport.sendMail(this.MailOptions)
    }
}
