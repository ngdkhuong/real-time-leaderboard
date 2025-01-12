import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
    private readonly client: Redis;
    constructor() {
        this.client = new Redis();
    }

    async setRefreshToken(userId: number, refreshToken: string) {
        await this.client.set(`refresh_token:${userId}`, refreshToken, 'EX', 7 * 24 * 60 * 60); // 1 week
    }

    async getRefreshToken(userId: number) {
		return this.client.get(`refresh_token:${userId}`);
	}

    async deleteRefreshToken(userId: number) {
		await this.client.del(`refresh_token:${userId}`);
	}
}