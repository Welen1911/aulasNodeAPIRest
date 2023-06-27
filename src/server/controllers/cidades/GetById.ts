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
    console.log(req.params);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).send(`Create ainda não foi implementado!<br>
    <form>
        Params: <input type='number' placeholder=${req.params.id}/>
    </form>
    `);

}