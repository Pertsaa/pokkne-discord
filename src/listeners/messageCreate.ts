import { Client } from 'discord.js';

import chatbotService from '../services/chatbot';
import { wait } from '../utils';

export const registerMessageCreateEvent = (client: Client): void => {
  client.on('messageCreate', async (message) => {
    if (!client.user) return;
    if (message.author.bot) return;
    if (message.content.includes('@everyone')) return;
    if (!message.mentions.users.has(client.user.id)) return;

    const parsedMessage = message.content
      .replaceAll(`<@${client.user.id}>`, '')
      .trim();

    const response = await chatbotService.respondToQuery(parsedMessage);
    message.channel.sendTyping();
    await wait(500 + response.length * 50);
    message.channel.send(response);
  });
};
