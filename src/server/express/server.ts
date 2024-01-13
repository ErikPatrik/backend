import { Server } from "http";
import { Express } from "express";
import bodyParser from "body-parser";

export class ExpressServer {
    public httpServer: Server

    constructor(server: Express, port: number) {
        this.setupStandardMiddleware(server)
        //this.httpServer = this.startListen(server, port)
    }

    public startListen(server: Express, port: number): Server {
        return server.listen(port)
    }

    private setupStandardMiddleware(server: Express) {
        server.use(bodyParser.json)

        server.use((req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            );
            next();
        })
    }
}
