import { ExpressServer } from "./server/express";
import express from "express";
import { ConfigsApp } from "./types/ConfigsApp";
import dotenv from "dotenv";

dotenv.config()

const config: ConfigsApp = {
    port: Number(process.env.SERVER_PORT) || 3000
};

const expressInstance = express();

try {
    const appServer = new ExpressServer(expressInstance, config.port)

    appServer.httpServer.on('error', () => {
        console.log('Server error')
    })

    appServer.httpServer.on('listening', () => {
        console.log('Server started')
    })

    appServer.connectDB()
} catch (error) {
    console.error('Error during server initialization:', error)
}
