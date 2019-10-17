import { Request, Response } from "express";
import dotenv from 'dotenv';
dotenv.config();

export class FactureControler {
    res: Response;
    req: Request;
    client: any;
    constructor(response: Response, request: Request){
        this.res = response;
        this.req = request; 
        this.saveForm = this.saveForm.bind(this);
    }

    public saveForm(){ 
        const { validationResult } = require('express-validator');

            const errors = validationResult(this.req)
            if (!errors.isEmpty()) {
            return this.res.status(422).json({ errors: errors.array() })
            }
            
        }

}