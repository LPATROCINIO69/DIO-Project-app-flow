import {IncomingMessage,ServerResponse} from "http";
import { serviceListEpisodes } from "../services/list-episodes-service"; 
import { serviceFilterEpisodes } from "../services/filter-episodes-service";

export const getListEpisodes = async (req:IncomingMessage, res:ServerResponse)=>{
    const content = await serviceListEpisodes();

    res.writeHead(200,{"content-type":"application/json"});
    res.end(JSON.stringify(content));
}


export const getFilterEpisode = async (req:IncomingMessage, res:ServerResponse) => {

    //const queryString = req.url?.split("?p=")[1] || "";

    const content = await serviceFilterEpisodes(req);
    res.writeHead(200, {"content-type":"application/json"});
    res.end(JSON.stringify(content));

}