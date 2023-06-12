import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
interface ICidade {
    nome: string;
    estado: string;
}

const bodyValidation: yup.Schema<ICidade> = yup.object().shape({
    nome: yup.string().required().min(3),
    estado: yup.string().required().min(2)
})

export const Create = async (req: Request<{},{},ICidade>, res: Response) => {
    
    let data: ICidade | undefined = undefined;

    try {
        data = await bodyValidation.validate(req.body); 
    } catch (error) {
        const yupError = error as yup.ValidationError;
        return res.json({
            errors: {
                default: yupError.message
            }
        })
    }
   
    res.send(data);
    

}