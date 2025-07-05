import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository"


export const serviceFilterEpisodes = async (req: IncomingMessage) =>{

    const queryString = req.url?.split("?p=")[1] || "";
    const data = await repositoryPodcast(queryString);

    return data;

}