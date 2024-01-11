import { Redis } from "@upstash/redis";

const requesterConfig = {
  url: process.env.UPSTASH_REDIS_REST_URL,
  token: process.env.UPSTASH_REDIS_REST_TOKEN,
};

export const db = new Redis(requesterConfig as any);
