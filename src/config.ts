import dotenv from 'dotenv';
dotenv.config();

const API_ENDPOINT = process.env.API_ENDPOINT;
const API_TOKEN = process.env.API_TOKEN;
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

if (!API_ENDPOINT) throw new Error('ConfigError: undefined API_ENDPOINT');
if (!API_TOKEN) throw new Error('ConfigError: undefined API_TOKEN');
if (!DISCORD_TOKEN) throw new Error('ConfigError: undefined DISCORD_ENDPOINT');

const config = { API_ENDPOINT, API_TOKEN, DISCORD_TOKEN };

export default config;
