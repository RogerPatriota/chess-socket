import { Game } from "./game.entity";

export abstract class IGameRepository {
    abstract createGame(game: Game): Promise<Game>;
}
