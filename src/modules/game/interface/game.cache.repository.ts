import { Inject, Injectable } from "@nestjs/common";
import type { RedisArgument, RedisClientType } from "redis";
import { CACHE_PROVIDER } from "src/shared/cache/cache.module";
import { GameCache } from "../types/game.cache";

@Injectable()
export class GameCacheRepository {
    constructor(
        @Inject(CACHE_PROVIDER)
        private readonly redis: RedisClientType
    ) { }

    async saveGame(game: GameCache): Promise<void> {
        const keyRedis = `game:${game.id}:state` as RedisArgument

        await this.redis.hSet(keyRedis, {
            gameId: game.id,
            status: game.status,
            fen: game.fen,
            version: String(game.version),
            blackPlayerId: game.blackPlayerId,
            whitePlayerId: game.whitePlayerId,
            turn: game.turn,
            lastMoveSan: game.lastMoveSan ?? "",
            lastMoveBy: game.lastMoveBy ?? "",
            lasMoveAt: game.lastMoveAt ?? "",
            clockWhite: String(game.clockWhite),
            clockBlack: String(game.clockBlack),
            updateAt: game.updateAt
        } as Record<string, string>)

        await this.redis.expire(keyRedis, 60 * 5) // 5 minutes
    }
}