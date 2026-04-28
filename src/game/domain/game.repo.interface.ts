import { Game } from "./game.entity";

export abstract class IGameRepository {
    abstract findGames(): Promise<Game[]>;
    abstract findGameById(id: string): Promise<Game | undefined>;
    abstract createGame(entity: Game): Promise<Game>;
}
