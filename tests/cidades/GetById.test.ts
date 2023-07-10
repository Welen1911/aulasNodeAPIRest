import { StatusCodes } from "http-status-codes";

import {testServer} from "../jest.setup";

describe("Cidades - Create", () =>{

    it("Get by id", async () => {

        const res = await testServer.post("/cidades").send({nome: "Passa e Fica", estado: "RN"})

        expect(res.status).toEqual(StatusCodes.CREATED);
        
        const res1 = await testServer.get(`/cidades/${res.body}`).send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty("errors.default");
        
        

    })
    it("Get by id", async () => {

        const res = await testServer.post("/cidades").send({nome: "Passa e Fica", estado: "RN"})

        expect(res.status).toEqual(StatusCodes.CREATED);
        
        const res1 = await testServer.get(`/cidades/999999`).send();

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty("errors.default");
        
        

    })
});