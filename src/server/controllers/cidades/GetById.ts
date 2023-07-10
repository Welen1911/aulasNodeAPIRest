import { Request, RequestHandler, Response } from "express";
import { StatusCodes } from "http-status-codes";
import * as yup from "yup";
import { validation } from "../../shared/middlewares";
interface IParamProps {
   id?: number;
}

export const getIdValidation = validation((getSchema) => ({
    params: getSchema<IParamProps>(yup.object().shape({
        id: yup.number().integer().required().moreThan(0)
    })),
}));


export const getId = async (req: Request<IParamProps>, res: Response) => {
   if (Number(req.params.id) === 999999) return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errors: {
        default: "Registro não encontrado"
    }
   })

   return res.status(StatusCodes.OK).json({
    id: req.params.id,
    nome: "Passa e Fica",
    estado: "RN"
   })

}