import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesController } from "../controllers/index";
const router = Router();

router.get("/", (req, res) => {
    return res.send("funcionou agora!");
})
router.post("/cidades", CidadesController.createValidation,CidadesController.Create);


export {router};