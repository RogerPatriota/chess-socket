import { Inject } from "@nestjs/common";
import { Game } from "./domain/game.entity";
import { IGameRepository } from "./domain/game.repo.interface";
import { DB_PROVIDER } from "src/database/database.module";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { games } from "src/database/schemas/game.schema";

export class GameRepository implements IGameRepository {

    constructor(
        @Inject(DB_PROVIDER)
        private readonly db: NodePgDatabase<any>
    ) {
    }

    async findGames(): Promise<Game[]> {
        const result = await this.db.select().from(games)

        return result as Game[]
    }
    async findGameById(id: string): Promise<Game | undefined> {
        throw new Error("Method not implemented.");
    }
    async createGame(entity: Game): Promise<Game> {
        const {id, createdAt, updatedAt, ...data} = entity;

        const result = await this.db
        .insert(games)
        .values(data as any)
        .returning();

        return result[0] as Game;
    }
}