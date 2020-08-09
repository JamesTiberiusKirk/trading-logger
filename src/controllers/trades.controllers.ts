import { Request, Response } from "express";

export function tradesHelloWorld(req: Request, res: Response){
    return res.send('Hello from controller')
}