const helper = require ('sendgrid').mail;
import async from 'async';


function sendEmail(
    parentCallback : any,
    fromEmail : any,
    toEmails: any,
    subject : any,
    textContent : any,
    htmlContent : any,
    sandbox_mode:  boolean
  ) {
    const errorEmails : any = [];
    const successfulEmails : any  = [];
    const sg = require('sendgrid').setApiKey('Api_Key');
    async.parallel([
      function(callback: any) {
        // Add to emails
        for (let i = 0; i < toEmails.length; i += 1) {
          // Add from emails
          const senderEmail = new helper.Email(fromEmail);
          // Add to email
          const toEmail = new helper.Email(toEmails[i]);
          // HTML Content
          const content = new helper.Content('text/html', htmlContent);
          const mail = new helper.Mail(senderEmail, subject, toEmail, content);
          var request = sg.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: mail.toJSON()
          });
          sg.API(request, function (error:any, response: any) {
            console.log('SendGrid');
            if (error) {
              console.log('Error response received');
            }
            console.log(response.statusCode);
            console.log(response.body);
            console.log(response.headers);
          });
        }
        // return
        callback(null, true);
      }
    ], function(err : any, results: any) {
      console.log('Done');
    });
    parentCallback(null,
      {
        successfulEmails: successfulEmails,
        errorEmails: errorEmails,
      }
    );
}

export default sendEmail;