import {Handler} from '@netlify/functions'
import {find} from '../config/mongodb'
import formattedReturn from './formattedReturn'

export const showDistrict: Handler = async(event, context) => {
    try {
        const urlParts = event.path.split("/")
        const results = await find(process.env.COLLECTION_DISTRICT!, {city_id: urlParts[2]})
        const returnData = {
            data: results,
            total: results?.length
        }
        return formattedReturn(200, returnData);
    } catch (error) {
        return formattedReturn(500, error);
    }
}