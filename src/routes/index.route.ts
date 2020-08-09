import express, { Response, Request } from 'express';
import { TradesRoute } from './trades.route';

export class IndexRoute {
    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        const tradesRoute = new TradesRoute();
        this.router.use('/trades', tradesRoute.router);
    }
}