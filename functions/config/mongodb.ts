import {MongoClient} from 'mongodb'

export const find = async(dbCollection: string, query: {}) => {
    try {
        const mongoClient = new MongoClient(process.env.MONGODB_URI!);
        const clientPromise = await mongoClient.connect();
        const collection = clientPromise.db(process.env.DB_NAME!).collection(dbCollection)
        
        const results = await collection.find(query).project({_id: 0}).toArray()
        await mongoClient.close()
        return results

    } catch (error) {
        console.log(error);
    }
}


