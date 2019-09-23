  const Factures = require ('./factureModel');
const express = require('express');
const FactureRouter = express.Router();
import PDFDocument from 'pdfkit'
 

FactureRouter.route('/create').post(function (req: any, res: any) {
  const factur = new Factures(req.body);
  factur.save()
    .then((facture: any ) => {
      res.json('User added successfully');
    })
    .catch((err: any) => {
      res.status(400).send("unable to save to database");
    });

    const doc = new PDFDocument()
    let filename = req.body.filename
    // Stripping special characters
    filename = encodeURIComponent(filename) + '.pdf'
    // Setting response to 'attachment' (download).
    // If you use 'inline' here it will automatically open the PDF
    res.setHeader('Content-disposition', 'attachment; filename="' + filename + '"')
    res.setHeader('Content-type', 'application/pdf')
    const content = req.body.content
    doc.y = 300
    doc.text(content, 50, 50)
    doc.pipe(res)
    doc.end()
});





module.exports = FactureRouter;