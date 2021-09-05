import { IMailProvider, IMessage } from './../IMailProvider';
import nodemailer from 'nodemailer';
import { Mail } from 'nodemailer/lib/mailer'

export class MailTrapMailProvider implements IMailProvider {
    private transporter: Mail
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            auth: {
                user: "criesualojahandshake@gmail.com",
                pass: "pedro110500",
            },
        })
    }
    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: message.to.email,
            from: message.from.email,
            subject: message.subject,
            message: message.body
        })
    }
}