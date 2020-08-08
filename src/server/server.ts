import { ServerConfig } from "../models/configs.model";

export class Server {
    config: ServerConfig;
    app: Express.Application;

    constructor(config: ServerConfig){
        this.config = config;
    }

    initRoutes(){

    }

    initMiddleware(){

    }

    initServer(){

    }
}