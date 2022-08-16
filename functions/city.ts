import { HandlerContext, HandlerEvent } from '@netlify/functions';
import formattedReturn from './helpers/formattedReturn';
import {showCity} from './helpers/getCity'

const handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod === 'GET') {
    return await showCity(event, context);
  } else {
    return formattedReturn(405, {});
  }
};

export { handler };
