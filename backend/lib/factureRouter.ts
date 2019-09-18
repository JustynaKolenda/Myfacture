  const Factures = require ('./factureModel');
const express = require('express');
const FactureRouter = express.Router();
 

FactureRouter.route('/create').post(function (req: Request, res: any) {
  const user = new Factures(req.body);
  user.save()
    .then((facture: any ) => {
      res.json('User added successfully');
    })
    .catch((err: any) => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = FactureRouter;