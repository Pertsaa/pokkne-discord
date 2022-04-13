import axios from 'axios';

import config from '../config';
import { MATCH_INTENT } from '../graphql/queries';
import { MatchIntentResponse } from '../types';

export const respondToQuery = async (query: string): Promise<string> => {
  try {
    const { data } = await axios.post<MatchIntentResponse>(
      config.API_ENDPOINT,
      {
        query: MATCH_INTENT,
        variables: {
          query,
          chatbotId: config.API_TOKEN,
        },
      }
    );
    const { response } = data.data.matchIntent;
    return response || '...';
  } catch (error) {
    console.error(error);
  }
  return '...';
};

export default { respondToQuery };
