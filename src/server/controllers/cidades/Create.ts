import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
interface ICidade {
    nome: string;
    estado: string;
}

interface IFilter {
    filter: string;
}

export const createValidation = validation((getSchema) => ({
    body: getSchema<ICidade>(yup.object().shape({
        nome: yup.string().required().min(3),
        estado: yup.string().required().min(2)
    })),
    query: getSchema<IFilter>(yup.object().shape({
        filter: yup.string().required().min(1),
    }))
}));




export const Create = async (req: Request<{},{},ICidade>, res: Response) => {
    console.log(req.body);
    res.send(`Você é da cidade ${req.body.nome} que é do estado ${req.body.estado}.`);

}