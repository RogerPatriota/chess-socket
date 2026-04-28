import { Game } from "./domain/game.entity";
import { IGameRepository } from "./domain/game.repo.interface";

export class GameRepository implements IGameRepository {
    async createGame(game: Game): Promise<Game> {
        console.log('repo', game)
        return game;
    }
}