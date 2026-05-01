import { createClient } from "redis";

export const client = createClient({});

client.on('error', err => console.log('Redis connection error', err));

client.connect().catch(err => console.error('Redis connect error', err));