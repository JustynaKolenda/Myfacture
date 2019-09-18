import {FactureControler} from './factureControler'
import { Request, Response } from "express";
import express = require('express');
import bodyParser = require("body-parser");
import helmet = require('helmet')


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
  
 app.get('/', function (req, res) {
  res.send('hello world')
})

app.post("/facture" ,[
    check('name').not().isEmpty().withMessage('Name must have at least three characters').isLength({min: 3}),
    check('surName').not().isEmpty().withMessage('Surname must have at least three characters').isLength({min: 3}),
    check('netto').not().isEmpty(),
    check('date','Chose your date ').not().isEmpty().optional(),
    check('title').not().isEmpty().withMessage('Facture nead title').isLength({min: 2})
  ],
  (req: Request, res: Response)=>{
    const facture = new FactureControler(res, req);
    return facture.saveForm();
  }) 
 
app.listen(8010, function () { 
   console.log('Example app listening on port 8010!');
});