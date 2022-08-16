import {Handler} from '@netlify/functions'
import {find} from '../config/mongodb'
import formattedReturn from './formattedReturn'

export const showCity: Handler = async(event, context) => {
    try {
        const results = await find(process.env.COLLECTION_CITY!, {})
        const returnData = {
            data: results,
            total: results?.length
        }
        return formattedReturn(200, returnData);
    } catch (error) {
        return formattedReturn(500, error);
    }
}