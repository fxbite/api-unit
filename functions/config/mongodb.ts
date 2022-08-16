import {MongoClient} from 'mongodb'

export const find = async(dbCollection: string, query: {}) => {
    try {
        const mongoClient = new MongoClient(process.env.MONGODB_URI!);
        const clientPromise = await mongoClient.connect();
        const collection = clientPromise.db(process.env.DB_NAME!).collection(dbCollection)
        
        const results = await collection.find(query)
        await mongoClient.close()
        return results

    } catch (error) {
        return error
    }
}


