export interface MatchIntentResponse {
  data: {
    matchIntent: {
      intent: string;
      response?: string;
    };
  };
}
