import * as http from "http";
import { getListEpisodes, getFilterEpisode } from "../controllers/podcasts-controller";
import { Routes } from "../routes/routes";
import { HttpMethod } from "./Http-methods";


export const app =
    async (request: http.IncomingMessage, response: http.ServerResponse) => {

        // querystring
        const baseUrl = request.url?.split("?")[0];
        

        // lista podcasts
        if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
            console.log("Debug - Entrei na chamada para listar produto. ")
            await getListEpisodes(request, response);
        }

        // filtrar podcasts
        if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
            await getFilterEpisode(request, response);
        }
    };
