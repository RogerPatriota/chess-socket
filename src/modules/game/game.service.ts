import { Injectable } from '@nestjs/common';
import { CreateGameDto } from './dto/create.game.dto';
import { Chess } from 'chess.js';
import { Game } from './domain/game.entity';
import { IGameRepository } from './domain/game.repo.interface';

@Injectable()
export class GameService {
    constructor(
        private readonly gameRepository: IGameRepository
    ) {}

    async getGames() {
        const games = await this.gameRepository.findGames();

        return games;
    }

    async createGame(data: CreateGameDto) {
        const chess = new Chess();

        const game = new Game(data.whitePlayerId, data.blackPlayerId);
        game.initialFen = chess.fen();
        game.currentFen = chess.fen();

        const newGame = await this.gameRepository.createGame(game);

        return newGame;
    }
}
