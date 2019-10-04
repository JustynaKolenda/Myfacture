import { Request, Response } from "express";
import mongodb from 'mongodb';
import MongoClient = mongodb.MongoClient;

export class FactureControler {
    res: Response;
    req: Request;
    client: any;
    constructor(response: Response, request: Request){
        this.res = response;
        this.req = request; 
        this.chceckAddtoDb = this.chceckAddtoDb.bind(this);
        this.checkConnectToDb = this.checkConnectToDb.bind(this);
        this.saveForm = this.saveForm.bind(this);
    }

    public saveForm () {
        const  dbUrl = "mongodb://localhost:27017/Myfacturs";
        const { validationResult } = require('express-validator');

            const errors = validationResult(this.req)
            if (!errors.isEmpty()) {
            return this.res.status(422).json({ errors: errors.array() })
            }
            MongoClient.connect(dbUrl, this.checkConnectToDb)
            
        }

    public checkConnectToDb (err:any, client:any){
            if(err) {
                this.res.status(500);
                this.res.json({error : "No conect to database"});
                return err;
            }
            this.client = client;
            var db = this.client.db('Myfacturs')
            db.collection("facturs").insert(this.req.body, this.chceckAddtoDb)
            
        }

    public chceckAddtoDb(err: any, doc: any) {
            if(err){
                this.res.status(500);
                this.res.json({error : "Could not be added to the database"});
                return err;
            }
            this.res.json(doc); 
            this.client.close();
        }

}