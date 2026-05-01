import { Inject } from "@nestjs/common";
import { CACHE_PROVIDER } from "src/shared/cache/cache.module";
import { Game } from "./domain/game.entity";
import type { RedisClientType } from "redis";

export class GameCacheRepository {
    constructor(
        @Inject(CACHE_PROVIDER)
        private readonly redis: RedisClientType
    ) {}

    async saveGame(game: Game): Promise<void> {
        const {id, createdAt, updatedAt,  ...data} = game
        const newGame = this.redis.set(`game:${game.id}`, JSON.stringify(game))
    }
}