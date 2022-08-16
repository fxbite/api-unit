import { HandlerEvent, HandlerContext } from '@netlify/functions';
import { showWard } from './helpers/getWard';
import formattedReturn from './helpers/formattedReturn';

const handler = async (event: HandlerEvent, context: HandlerContext) => {
  if (event.httpMethod === 'GET') {
    return await showWard(event, context);
  } else {
    return formattedReturn(405, {});
  }
};

export { handler };
