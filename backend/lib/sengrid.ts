import sgMail from '@sendgrid/mail';

sgMail.setApiKey('Api_key');

const message = {
    from : "Myemail",
    mail_settings : {sandbox_mode: {
        enable: true
    }},
    to: 'emailSendTo',
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',

};
 sgMail.send(message);

export default message;