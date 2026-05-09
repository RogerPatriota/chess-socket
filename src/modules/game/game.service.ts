import { Inject, Injectable } from '@nestjs/common';
import { CreateGameDto } from './types/dto/create.game.dto';
import { Chess } from 'chess.js';
import { Game } from './domain/game.entity';
import { IGameRepository } from './domain/game.repo.interface';
import { GameCacheRepository } from './infra/game.cache.repository';
import { CACHE_PROVIDER } from 'src/shared/cache/cache.module';
import { GameCache } from './types/game.cache';

@Injectable()
export class GameService {
    constructor(
        private readonly gameRepository: IGameRepository,
        private readonly gameCacheRepository: GameCacheRepository
    ) {}

    async getGames() {
        const games = await this.gameRepository.findGames();

        return games;
    }

    async getGameById(id: string) {
        const gameCache = await this.gameCacheRepository.getGamesById(id);

        if (!gameCache || Object.keys(gameCache).length === 0) {
            const game = await this.gameRepository.findGameById(id);

            if (!game) {
                return null
            } 

            const cacheData: GameCache = {
                id: game.id!,
                status: game.status,
                fen: game.currentFen,
                version: 1, 
                blackPlayerId: game.blackPlayerId || "",
                whitePlayerId: game.whitePlayerId || "",
                turn: game.currentFen.split(' ')[1] as 'w' | 'b',
                clockWhite: game.clockWhite,
                clockBlack: game.clockBlack,
                updateAt: game.updatedAt?.toISOString() || new Date().toISOString()
            };

            await this.gameCacheRepository.saveGame(cacheData);
            return game;
        }

        return gameCache;
    }

    async createGame(data: CreateGameDto) {
        const chess = new Chess();

        const game = new Game(data.whitePlayerId, data.blackPlayerId);
        game.initialFen = chess.fen();
        game.currentFen = chess.fen();

        const newGame = await this.gameRepository.createGame(game);

        try {
            await this.gameCacheRepository.saveGame({
                id: newGame.id!,
                fen: newGame.currentFen,
                status: newGame.status,
                version: 1,
                blackPlayerId: newGame.blackPlayerId!,
                whitePlayerId: newGame.whitePlayerId!,
                turn: 'w',
                clockWhite: newGame.clockWhite,
                clockBlack: newGame.clockBlack,
                updateAt: new Date().toISOString(),
            });
        } catch (error) {
            console.error('falied to fill redis game state', error);
        }

        return newGame
    }
}
