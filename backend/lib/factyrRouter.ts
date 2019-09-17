const express = require('express');
const UserRouter = express.Router();

// import Facture  from './factureModel';

UserRouter.route('/create').post(function (req: Request, res: any) {
  const user = new Facture(req.body);
  user.save()
    .then((facture: any ) => {
      res.json('User added successfully');
    })
    .catch((err: any) => {
      res.status(400).send("unable to save to database");
    });
});

module.exports = UserRouter;