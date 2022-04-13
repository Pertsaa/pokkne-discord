import { Client, Intents } from 'discord.js';

import config from './config';
import { registerMessageCreateEvent } from './listeners/messageCreate';
import { registerReadyEvent } from './listeners/ready';

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
});

registerReadyEvent(client);
registerMessageCreateEvent(client);

client.login(config.DISCORD_TOKEN);
