import {IncomingMessage,ServerResponse} from "http";
import { serviceListEpisodes } from "../services/list-episodes-service"; 
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/ContentType";
import { PodcastTransferModel } from "../models/podcast-transfer-models";

export const getListEpisodes = async (req:IncomingMessage, res:ServerResponse)=>{
    const content:PodcastTransferModel = await serviceListEpisodes();

    res.writeHead(content.statusCode,{"content-type":ContentType.JSON});
    res.end(JSON.stringify(content.body));
}


export const getFilterEpisode = async (req:IncomingMessage, res:ServerResponse) => {

    //const queryString = req.url?.split("?p=")[1] || "";

    const content:PodcastTransferModel = await serviceFilterEpisodes(req);
    res.writeHead(content.statusCode, {"content-type":ContentType.JSON});
    res.end(JSON.stringify(content.body));

}