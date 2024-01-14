import { Server } from "http";
import { Express, NextFunction, Request, Response } from "express";
import bodyParser from "body-parser";
import startDatabase from "../../config/database/mongo/database";

export class ExpressServer {
    public httpServer: Server

    constructor(server: Express, port: number) {
        this.setupStandardMiddleware(server)
        this.httpServer = this.startListen(server, port)
    }

    public startListen(server: Express, port: number): Server {
        return server.listen(port)
    }

    public async connectDB() {
        await startDatabase()
    }

    private setupStandardMiddleware(server: Express) {
        server.use(bodyParser.json)

        server.use((req: Request, res: Response, next: NextFunction) => {
            res.header('Access-Control-Allow-Origin', '*')
            res.header(
                'Access-Control-Allow-Headers',
                'Origin, X-Requested-With, Content-Type, Accept'
            )
            next()
        })
    }
}
