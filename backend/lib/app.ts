import { Request, Response } from "express";
import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import mail from './mail';
import {FactureControler} from './FactureControler';
import {FactureValidation} from './FactureValidation';
import {CreatePdf} from './CreatePdf';;

const app: express.Application = express();
app.use(helmet())
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

  next();
}); 

app.post('/facture', FactureValidation,
  (req:Request,res:Response)=> {
      const creat = new CreatePdf(res,req);
      creat.create();
      mail();
      const send = new FactureControler(res, req);
      return send.saveForm();
 });


 app.get('/' ,function (req, res) {
  res.send('hello world')
  req.body;

})
 
app.listen(8000, function () { 
   console.log('Example app listening on port 8000!');
});


