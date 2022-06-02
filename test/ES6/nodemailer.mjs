// import patch first
import '../../lib/index';
// then nodemailer
import nodemailer from 'nodemailer';

async function sendTestMail() {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },
    });

    const info = await transporter.sendMail({
        from: '"Foo" <foo@example.com>',
        to: 'bar@example.com',
        subject: 'It works!!!',
        text: 'Successfully patched Nodemailer!',
        html: 'Successfully patched <b>Nodemailer</b>!',
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

sendTestMail();