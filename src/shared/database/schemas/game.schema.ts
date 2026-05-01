import {  pgTable, uuid, timestamp, text} from "drizzle-orm/pg-core";


export const games = pgTable('game', {
    id: uuid('id').primaryKey().defaultRandom(),
    whitePlayerId: uuid('white_player_id').notNull(),
    blackPlayerId: uuid('black_player_id').notNull(),
    status: text('status').default('new'),
    initialFen: text('initial_fen').notNull(),
    currentFen: text('current_fen').notNull(),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
})