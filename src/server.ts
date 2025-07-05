import * as http from "http";
import {getFilterEpisode, getListEpisodes} from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";

const porta = process.env.PORT;

// create http server
const server = http.createServer(
    async (request:http.IncomingMessage, response:http.ServerResponse) => {

        // querystring
        const [baseUrl, queryString] = request.url?.split("?") ?? ["",""];

        console.log("Debug - "+ baseUrl);
        console.log("Debug - "+ queryString);

        // lista podcasts
        if (request.method === "GET" && baseUrl === Routes.LIST){
            await getListEpisodes(request, response);
        }

        // filtrar podcasts
        if (request.method === "GET" && baseUrl === Routes.EPISODE) {
            await getFilterEpisode(request,response);
        }
})

server.listen(porta, () =>{
    console.log(`Servidor iniciado na porta ${porta}`);
})