import { StatusCodes } from "http-status-codes";

import {testServer} from "../jest.setup";

describe("Cidades - Create", () =>{

    it("Delete Id", async () => {

        const res = await testServer.post("/cidades").send({nome: "Passa e Fica", estado: "RN"})

        expect(res.status).toEqual(StatusCodes.CREATED);
        expect(typeof res.body).toEqual("number");
        
        const res1 = await testServer.delete(`/cidades/${res.body}`).send();
        
        expect(res1.body).toHaveProperty("errors.default");
        expect(res1.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);

    })
    it("Cria registro", async () => {

        const res = await testServer.post("/cidades").send({nome: "Passa e Fica", estado: "RN"})

        expect(res.status).toEqual(StatusCodes.CREATED);
        expect(typeof res.body).toEqual("number");
        
        const res1 = await testServer.delete("/cidades/10").send();
        
        expect(res1.body).toHaveProperty("errors.default");
        expect(res1.status).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);

    })
});