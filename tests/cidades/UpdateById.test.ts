import { StatusCodes } from "http-status-codes";

import {testServer} from "../jest.setup";

describe("Cidades - Create", () =>{

    it("Get by id", async () => {

        const res = await testServer.post("/cidades").send({nome: "Passa e Fica", estado: "RN"})

        expect(res.status).toEqual(StatusCodes.CREATED);
        
        const res1 = await testServer.put(`/cidades/${res.body}`).send({nome: "Parnamirim"});

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty("errors.default");
        
        

    })
    it("Get by id", async () => {

        const res = await testServer.post("/cidades").send({nome: "Passa e Fica", estado: "RN"})

        expect(res.status).toEqual(StatusCodes.CREATED);
        
        const res1 = await testServer.put(`/cidades/999999`).send({nome: "Parnamirim"});

        expect(res1.statusCode).toEqual(StatusCodes.INTERNAL_SERVER_ERROR);
        expect(res1.body).toHaveProperty("errors.default");
        
        

    })
});