import { Client } from 'discord.js';

export const registerReadyEvent = (client: Client): void => {
  client.on('ready', async () => {
    console.log(`Client online!`);
  });
};
