import { HandlerEvent, HandlerContext } from '@netlify/functions';
import { showDistrict } from './helpers/getDistrict';
import formattedReturn from './helpers/formattedReturn';

const handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod === 'GET') {
    return await showDistrict(event, context);
  } else {
    return formattedReturn(405, {});
  }
};

export { handler };
