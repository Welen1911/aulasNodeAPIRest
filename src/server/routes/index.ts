import { Router } from "express";
import { StatusCodes } from "http-status-codes";
import { CidadesController } from "../controllers/index";
const router = Router();

router.get("/", (req, res) => {
    return res.send("funcionou agora!");
})

router.get("/cidades", CidadesController.getAllValidation,CidadesController.getAll);
router.get("/cidades/:id", CidadesController.getIdValidation,CidadesController.getId);
router.put("/cidades/:id", CidadesController.updateByIdValidation,CidadesController.updateById);
router.post("/cidades", CidadesController.createValidation,CidadesController.Create);
router.delete("/cidades/:id", CidadesController.deleteByIdValidation,CidadesController.deleteById);



export {router};