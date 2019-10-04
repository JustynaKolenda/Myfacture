const nodemailer = require('nodemailer');

async function mail() {
    let testAccount = await nodemailer.createTestAccount();
    const now = new Date();
    const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: 'myEmail',
               pass: 'password'
           }
    });

    let info = await transporter.sendMail({
        from: `"Faktury" ${transporter.user}`, // sender address
        to: 'mailTosend', // list of receivers
        subject: `"[UOD][RACHUNEK]" ${'Justyna Kolenda'} ${months[now.getMonth()]}`, // Subject line
        text: `"Fakture przesłano z "`+`${"myEmail"}`, // plain text body
        html: `<b>Fakture przesłano z `+`${"myEmail"}</b>`, // html body
        attachments: [{
            filename: 'faktura.pdf',
            path: './facture.pdf' 
        }]
    });

}


export default mail;