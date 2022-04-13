export const MATCH_INTENT = `
  query MatchIntent($query: String!, $chatbotId: ID!) {
    matchIntent(query: $query, chatbotId: $chatbotId) {
      intent
      response
    }
  }
`;
