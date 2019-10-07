import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import {FactureValidation} from './FactureValidation';
import {SendFacture} from './SendFacture';
import dotenv from 'dotenv';
dotenv.config();


const app: express.Application = express();
app.use(helmet())
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,PATCH,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');

  next();
}); 

app.post('/facture', FactureValidation, SendFacture);

app.get('/' ,function (req, res) {
  res.send('hello world')
  req.body;
})
 
app.listen(process.env.MY_PORT, function () { 
   console.log('Example app listening on port 8000');
});


