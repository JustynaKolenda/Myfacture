const nodemailer = require('nodemailer');

async function mail() {
    let testAccount = await nodemailer.createTestAccount();
    const now = new Date();
    const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'myemail',
               pass: 'mypasword'
           }
    });

    let info = await transporter.sendMail({
        from: '"Faktury" <myemail@gmail.com>', // sender address
        to: 'mailWherSend', // list of receivers
        subject: `"[UOD][RACHUNEK]" ${'Justyna Kolenda'} ${months[now.getMonth()]}`, // Subject line
        text: `"Fakture przesłano z "`+`${"myemail"}`, // plain text body
        html: `<b>Fakture przesłano z `+`${"myemail"}</b>`, // html body
        attachments: [{
            filename: 'faktura.pdf',
            path: './facture.pdf' 
        }]
    });

    console.log('Message send: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
}


export default mail;