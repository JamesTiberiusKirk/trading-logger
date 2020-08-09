import { Server } from './server/server';

const server = new Server(
    {
        baseApiUrl: '/api',
        port: '3000'
    }
);