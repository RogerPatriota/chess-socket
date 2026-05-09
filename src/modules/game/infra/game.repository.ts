import { Inject } from "@nestjs/common";
import { eq } from "drizzle-orm";
import { Game } from "../domain/game.entity";
import { IGameRepository } from "../domain/game.repo.interface";
import { DB_PROVIDER } from "src/shared/database/database.module";
import { NodePgDatabase } from "drizzle-orm/node-postgres";
import { games } from "src/shared/database/schemas/game.schema";

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
        const result = await this.db.select().from(games).where(eq(games.id, id)).limit(1);
        
        return result[0] as Game;
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