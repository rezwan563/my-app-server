import { Request, Response } from "express";

export const sayHi = async(
    req: Request,
    res: Response
) =>{
    try {
        res.status(200).send({message: 'Hi User!'})
    } catch (error) {
        console.error(error)
    }
}