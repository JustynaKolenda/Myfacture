import {FactureControler} from './factureControler'
import { Request, Response, response } from "express";
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
const fs = require("fs");
import PDFDocument from 'pdfkit';
import async from 'async';
import mail from './mail';
import sendEmail from './sengridMail';
import Facture from './factureModel';


// Create a new express application instance
const app: express.Application = express();
const { check } = require('express-validator');
app.use(helmet())
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

  next();
});

 app.use(express.json());
  
 app.get('/' ,function (req, res) {
  res.send('hello world')
  req.body;

})

app.post('/facture' ,[
    check('name').not().isEmpty().withMessage('Name must have at least three characters').isLength({min: 3}),
    check('surName').not().isEmpty().withMessage('Surname must have at least three characters').isLength({min: 3}),
    check('netto').not().isEmpty(),
    check('date','Chose your date ').not().isEmpty().optional(),
    check('title').not().isEmpty().withMessage('Facture nead title').isLength({min: 2})
  ],
  (req: Request, res: Response)=>{
   const facture = new FactureControler(res, req);
    //console.log(req.body)
    return console.log(res.json(facture))
  });


app.post('/createPdf',
  (req:Request,res:Response)=> {
    const doc = new PDFDocument({margin : 100});
    doc.pipe(fs.createWriteStream("facture.pdf"));
    doc.fontSize(25).text('dodano tekst', 100,100);
    doc.end(); 
    //mail słuzy do wysyłki maila
    mail();
    res.status(200).send("ok");
  });

// app.post('/mail', (req:Request, res:Response)=> {
//     mail();
//     res.status(200).send("ok");
// })

// app.post('/mail', function (req:any, res:any, next:any) {
//     async.parallel([
//       function (callback:any) {
//         sendEmail(
//           callback,
//           'Myemail',
//           ['emailSendTo'],
//           'Subject Line',
//           'Text Content',
//           '<p style="font-size: 32px;">HTML Content</p>',
//            false
//         );
//       }
//     ], function(err:any, results:any) {
//       res.send({
//         success: true,
//         message: 'Emails sent',
//         successfulEmails: results[0].successfulEmails,
//         errorEmails: results[0].errorEmails,
//       });
//     });
//  });
 
app.listen(8030, function () { 
   console.log('Example app listening on port 8030!');
});


