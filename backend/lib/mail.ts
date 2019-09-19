const nodemailer = require('nodemailer');

async function main() {
    let testAccount = await nodemailer.createTestAccount();
    var dateFormat = require('dateformat');
    var now = new Date();
    dateFormat(now, "mmmm");
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'myadressEmail',
               pass: 'myPassword'
           }
    });

    let info = await transporter.sendMail({
        from: '"Faktury" <myadressEmail>', // sender address
        to: 'emailToSend', // list of receivers
        subject: `"[UOD][RACHUNEK]"<Justyna><Kolenda>`+`${now.toDateString()}`, // Subject line
        text: `"Fakture przesłano z "`+`${"myadressEmail"}`, // plain text body
        html: `<b>Fakture przesłano z `+`${"myadressEmail"}</b>`, // html body
        attachments: [{
            filename: 'faktura.pdf',
            path: './test.pdf' 
        }]
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);

export default main;