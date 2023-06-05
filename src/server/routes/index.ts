import { Router } from "express";
import { StatusCodes } from "http-status-codes";
const router = Router();

router.get("/", (req, res) => {
    return res.send("funcionou agora!");
})
router.post("/teste", (req, res) => {
    console.log(req.body);
    let nome = req.body.nome;
    return res.status(StatusCodes.UNAUTHORIZED).json(req.body);
})


export {router};