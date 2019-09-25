// import {FactureControler} from './factureControler'
import { Request, Response, response } from "express";
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import fs from 'fs';
import PDFDocument from 'pdfkit';
import mail from './mail';
import {generateHeader, generateFooter} from './viewPdf';


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
  
 app.post('/facture',[
    check('name').not().isEmpty().withMessage('Name must have at least three characters').isLength({min: 3}),
    check('surName').not().isEmpty().withMessage('Surname must have at least three characters').isLength({min: 3}),
    check('netto').not().isEmpty(),
    check('date','Chose your date ').not().isEmpty().optional().isISO8601('dd-mm-yyyy'),
    check('title').not().isEmpty().withMessage('Facture nead title').isLength({min: 2})
  ],
    (req:Request,res:Response)=> {
      const doc = new PDFDocument({margin : 100});
      const netto = req.body.netto;
      const name = req.body.name;
      const surName = req.body.surName;
      const date = req.body.date;
      const title = req.body.title;
      doc.pipe(fs.createWriteStream("facture.pdf"));
      generateHeader(doc)
      doc.fontSize(10).text(title, 100,100).text(netto, 150, 100).text(name, 300, 100).text(surName, 300, 150).text(date, 200, 80, { align: "right" });
      generateFooter(doc)
      doc.end(); 
      //mail słuzy do wysyłki maila
      mail();
      res.status(200).send("ok");
 });


 app.get('/' ,function (req, res) {
  res.send('hello world')
  req.body;

})
 
app.listen(8030, function () { 
   console.log('Example app listening on port 8030!');
});


