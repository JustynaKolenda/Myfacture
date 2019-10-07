import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

async function mail() {
    let testAccount = await nodemailer.createTestAccount();
    const now = new Date();
    const months = ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"];
    const myEmail = process.env.MY_EMAIL;
    const myPassword = process.env.MY_PASSWORD;
    let emailWhereSend = process.env.EMAIL_WHER_SEND;
    


    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
               user: myEmail,
               pass: myPassword
           }
    });

    let info = await transporter.sendMail({
        from: `"Faktury" ${myEmail}}`, // sender address
        to: emailWhereSend, // list of receivers
        subject: `"[UOD][RACHUNEK]" ${'Justyna Kolenda'} ${months[now.getMonth()]}`, // Subject line
        text: `"Fakture przesłano z "`+`${myEmail}`, // plain text body
        html: `<b>Fakture przesłano z `+`${myEmail}</b>`, // html body
        attachments: [{
            filename: 'faktura.pdf',
            path: './facture.pdf' 
        }]
    });
}


export default mail;