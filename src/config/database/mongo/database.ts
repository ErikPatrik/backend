import mongoose from 'mongoose'
import 'dotenv/config'
import { configDatabase } from './database.configuration'


export default async function startDatabase() {
    const uri = configDatabase.MONGO_URI

    mongoose.connect(uri as string)
        .then(() => {
            console.log('Connected to MongoDB')
        })
        .catch((error: any) => {
            console.error('Error connecting MongoDB:', error)
        })

    const db = mongoose.connection

    db.on('error', console.error.bind(console, 'Connection error:'))
    db.once('open', () => {
        console.log('Connected to the database')
    })
}
