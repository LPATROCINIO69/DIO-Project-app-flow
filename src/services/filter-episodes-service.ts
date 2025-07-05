import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"
import { PodcastTransferModel } from "../models/podcast-transfer-models";
import { StatusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async (req: IncomingMessage):Promise<PodcastTransferModel> =>{

    // define a interface de retorno
    let responseFormat: PodcastTransferModel = {
        statusCode : StatusCode.OK,
        body : [] 
    };

    // busca os dados
    const queryString = req.url?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    //verifica se tem conteúdo
    if (data.length>0) {
        responseFormat.statusCode = StatusCode.OK;
    } else {
        responseFormat.statusCode = StatusCode.NO_CONTENT;
    }
    
    responseFormat.body = data;

    return responseFormat;

}