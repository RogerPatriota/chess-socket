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

    createGame(data: CreateGameDto) {
        const chess = new Chess();

        const game = new Game(data.whitePlayerId, data.blackPlayerId);
        game.initial_fen = chess.fen();
        game.current_fen = chess.fen();

        this.gameRepository.createGame(game);

        return game;
    }
}
