import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
interface ICidade {
    nome: string;
    estado: string;
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(2)
    })),
}));


export const Create = async (req: Request<{},{},ICidade>, res: Response) => {
    console.log(req.body);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Create ainda não implementado!`);

}