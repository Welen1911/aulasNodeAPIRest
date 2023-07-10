import { StatusCodes } from "http-status-codes";

import {testServer} from "../jest.setup";

describe("Cidades - Create", () =>{

    it("Cria registro", async () => {

        const res1 = await testServer.post("/cidades").send({nome: "Passa e Fica", estado: "RN"})

        expect(res1.status).toEqual(StatusCodes.CREATED);
        expect(typeof res1.body).toEqual("number");


    })
 
    it("Não pode add cidade com nome menor que 3 letras", async () => {

        const res1 = await testServer.post("/cidades").send({nome: "Passa e Fica", estado: "RN"})
        
        expect(res1.body).toHaveProperty("errors.body.nome");
        expect(res1.status).toEqual(StatusCodes.BAD_REQUEST);


    })

    it("Não pode estado com só uma letra", async () => {

        const res1 = await testServer.post("/cidades").send({nome: "Passa e Fica", estado: "RN"})
        
        expect(res1.body).toHaveProperty("errors.body.estado");
        expect(res1.status).toEqual(StatusCodes.BAD_REQUEST);


    })

    it("Não pode sem o capo estado", async () => {

        const res1 = await testServer.post("/cidades").send({nome: "Passa e Fica"})
        
        expect(res1.body).toHaveProperty(res1.body.estado);
        expect(res1.status).toEqual(StatusCodes.OK);


    })

    it("Não pode sem o capo nome", async () => {

        const res1 = await testServer.post("/cidades").send({estado: "RN"})
        
        expect(res1.body.nome).toHaveProperty(res1.body.nome);
        expect(res1.status).toEqual(StatusCodes.OK);


    })

    it("Não pode sem nenhum campo", async () => {

        const res1 = await testServer.post("/cidades").send({})
        
        expect(res1.body.nome && res1.body.estado).toHaveProperty(res1.body.estado && res1.body.nome);
        expect(res1.status).toEqual(StatusCodes.OK);


    })



    
});