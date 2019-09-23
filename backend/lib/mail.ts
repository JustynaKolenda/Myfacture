const nodemailer = require('nodemailer');

async function mail() {
    let testAccount = await nodemailer.createTestAccount();
    const now = new Date();
    const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'myMail',
               pass: 'Mypassword'
           }
    });

    let info = await transporter.sendMail({
        from: '"Faktury" <myMail>', // sender address
        to: 'mailWheresend', // list of receivers
        subject: `"[UOD][RACHUNEK]" ${'Justyna Kolenda'} ${months[now.getMonth()]}`, // Subject line
        text: `"Fakture przesłano z "`+`${"myMail"}`, // plain text body
        html: `<b>Fakture przesłano z `+`${"myMail"}</b>`, // html body
        attachments: [{
            filename: 'faktura.pdf',
            path: './facture.pdf' 
        }]
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}

mail().catch(console.error);

export default mail;