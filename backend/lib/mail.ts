const nodemailer = require('nodemailer');

async function main() {
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'myemail',
               pass: 'mypasword'
           }
    });
    
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <myemail>', // sender address
        to: 'emailSendTo', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>', // html body
        attachments: [{
            filename: 'test.pdf',
            path: './test.pdf' 
        }]
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);

export default main;