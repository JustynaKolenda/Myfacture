import { Request, Response } from "express";
import mail from './mail';
import {FactureControler} from './FactureControler';
import {CreatePdf} from './CreatePdf';;

export function SendFacture(req:Request,res:Response){
        const creat = new CreatePdf(res,req);
        creat.create();
        mail();
        const send = new FactureControler(res, req);
        return send.saveForm();
   }
