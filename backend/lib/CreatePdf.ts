import fs from 'fs';
import PDFDocument from 'pdfkit';
import {generateHeader, generateFooter} from './viewPdf';
import { Request, Response } from "express";

export class CreatePdf {
    res: Response;
    req: Request;
    client: any;
    constructor(response: Response, request: Request){
        this.res = response;
        this.req = request; 
        this.create = this.create.bind(this);
    }

    public create() {
        const doc = new PDFDocument({margin : 100});
        const netto = this.req.body.netto;
        const name = this.req.body.name;
        const surName = this.req.body.surName;
        const date = this.req.body.date;
        const title = this.req.body.title;
        doc.pipe(fs.createWriteStream("facture.pdf"));
        generateHeader(doc)
        doc.fontSize(10).text(title, 100,100).text(netto, 150, 100).text(name, 300, 100).text(surName, 300, 150).text(date, 200, 80, { align: "right" });
        generateFooter(doc)
        doc.end(); 
    }
}