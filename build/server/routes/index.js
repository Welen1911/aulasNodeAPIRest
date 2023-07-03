"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const index_1 = require("../controllers/index");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    return res.send("funcionou agora!");
});
router.get("/cidades", index_1.CidadesController.getAllValidation, index_1.CidadesController.getAll);
router.get("/cidades/:id", index_1.CidadesController.getIdValidation, index_1.CidadesController.getId);
router.put("/cidades/:id", index_1.CidadesController.updateByIdValidation, index_1.CidadesController.updateById);
router.post("/cidades", index_1.CidadesController.createValidation, index_1.CidadesController.Create);
router.delete("/cidades/:id", index_1.CidadesController.deleteByIdValidation, index_1.CidadesController.deleteById);
