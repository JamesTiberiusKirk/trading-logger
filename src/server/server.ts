import express from 'express';
import { ServerConfig } from '../models/configs.model';
import { IndexRoute } from '../routes/index.route';
import bodyParser from 'body-parser';
import morgan from 'morgan';


export class Server {
    config: ServerConfig;
    app: express.Application;

    constructor(config: ServerConfig) {
        this.config = config;
        this.app = express();

        this.initMiddleware();
        this.initRoutes();
        this.initServer();
    }

    initRoutes() {
        const indexRoute = new IndexRoute();
        this.app.use(this.config.baseApiUrl, indexRoute.router);
    }

    initMiddleware() {
        this.app.use(bodyParser.json());
        this.app.use(morgan('combined'));
    }

    initServer() {
        this.app.listen(this.config.port, () => {
            console.log(`Listening at http://localhost:${this.config.port}`);
        });
    }
}