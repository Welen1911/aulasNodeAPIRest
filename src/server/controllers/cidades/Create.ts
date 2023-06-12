import { Request, Response } from "express";
interface ICidade {
    nome : string;
    estado : string;
}
export const Create = (req: Request<{},{},ICidade>, res: Response) => {
    const data = req.body;
   
    
    
    return res.send(`Cidade: ${data.nome};</br>Estado: ${data.estado};`);
}