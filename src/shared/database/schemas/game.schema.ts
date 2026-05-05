import {  pgTable, uuid, timestamp, text, numeric, integer} from "drizzle-orm/pg-core";


export const games = pgTable('game', {
    id: uuid('id').primaryKey().defaultRandom(),
    whitePlayerId: uuid('white_player_id').notNull(),
    blackPlayerId: uuid('black_player_id').notNull(),
    status: text('status').default('new'),
    initialFen: text('initial_fen').notNull(),
    currentFen: text('current_fen').notNull(),
    clockWhite: integer('clock_white').default(300),
    clockBlack: integer('clock_black').default(300),
    createdAt: timestamp('created_at', { mode: 'date' }).defaultNow(),
    updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow(),
})