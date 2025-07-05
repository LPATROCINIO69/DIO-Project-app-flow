import * as http from "http";
import {getListEpisodes} from "./controllers/podcasts-controller";

const porta = process.env.PORT;

// create http server
const server = http.createServer(
    async (request:http.IncomingMessage, response:http.ServerResponse) => {
        if (request.method === "GET"){
            await getListEpisodes(request, response);
        }
})

server.listen(porta, () =>{
    console.log(`Servidor iniciado na porta ${porta}`);
})