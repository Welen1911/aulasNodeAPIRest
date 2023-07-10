import { StatusCodes } from "http-status-codes";

import {testServer} from "../jest.setup";

describe("Cidades - Create", () =>{

    it("Get all", async () => {

        const res = await testServer.post("/cidades").send({nome: "Passa e Fica", estado: "RN"})

        expect(res.status).toEqual(StatusCodes.CREATED);
        
        const res1 = await testServer.get(`/cidades/`).send();
        
        expect(Number(res1.header["x-total-count"])).toBeGreaterThan(0);
        expect(res1.status).toEqual(StatusCodes.OK);
        expect(res1.body.length).toBeGreaterThan(0);

    })
});