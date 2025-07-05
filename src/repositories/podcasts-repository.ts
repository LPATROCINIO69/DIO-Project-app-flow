import fs from "fs";
import path from "path";
import { PodcastModel } from "../models/podcast-model";

const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (podcastName?: string): Promise<PodcastModel[]> => {
    
    const language = "utf-8"
    const rawData = fs.readFileSync(pathData, language);

    try {
        const jsonFile: PodcastModel[] = JSON.parse(rawData);

        if (!Array.isArray(jsonFile)) {
            console.error("Erro: conteúdo do JSON não é um array.");
            return [];
        }

        console.log("DEBUG - podcastName recebido:", podcastName);
        console.log("DEBUG - JSON original:", jsonFile);

        if (podcastName) {
            const filtered = jsonFile.filter(
                (podcast) => podcast.podcastName.toLowerCase() === podcastName.toLowerCase()
            );

            console.log("DEBUG - Após filtro:", filtered);
            return filtered;
        }

        return jsonFile;

    } catch (err) {
        console.error("Erro ao ler ou parsear o JSON:", err);
        return [];
    }
};