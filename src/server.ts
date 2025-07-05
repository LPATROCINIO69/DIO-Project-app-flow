import * as http from "http";
import { app } from "./utils/app";

const porta = process.env.PORT;

// create http server
const server = http.createServer(app);

server.listen(porta, () =>{
    console.log(`Servidor iniciado na porta ${porta}`);
})