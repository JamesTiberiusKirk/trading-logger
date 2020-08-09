import express from 'express';
import { tradesHelloWorld } from '../controllers/trades.controllers';

export class TradesRoute {
    router: express.Router;

    constructor() {
        this.router = express.Router();
        this.initRoutes();
    }

    initRoutes() {
        this.router.get('/', tradesHelloWorld);
    }
}