import { Server } from "http";
import { Express } from "express";
import bodyParser from "body-parser";

export class ExpressServer {
    public httpServer: Server

    constructor(server: Express, port: number) {
        this.setupStandardMiddleware(server)
    }

    private setupStandardMiddleware(server: Express) {
        server.use(bodyParser.json)
    }
}
