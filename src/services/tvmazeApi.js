import axios from "axios";
import config from "../config.json";

const client = axios.create({
    baseURL: config.services.tvmaze.baseUrl
});

const tvmazeApi = {
    shows: async (search) => {
        const response = await client.get(config.services.tvmaze.shows, { 
            params: {
                q: search,
            }
        });

        return response.data;
    },
};

export default tvmazeApi;