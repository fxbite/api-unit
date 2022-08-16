import {Handler} from '@netlify/functions'
import {find} from '../config/mongodb'
import formattedReturn from './formattedReturn'

export const showDistrict: Handler = async(event, context) => {
    try {
        const urlParts = event.path.split("/")
        const results = await find(process.env.COLLECTION_DISTRICT!, {cityId: urlParts[1]})
        return formattedReturn(200, results);
    } catch (error) {
        return formattedReturn(500, error);
    }
}