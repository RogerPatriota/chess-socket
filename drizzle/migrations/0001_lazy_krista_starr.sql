ALTER TABLE "game" RENAME COLUMN "fen" TO "initial_fen";--> statement-breakpoint
ALTER TABLE "game" RENAME COLUMN "updated_at" TO "updatedAt";--> statement-breakpoint
ALTER TABLE "game" ALTER COLUMN "status" SET DEFAULT 'new';--> statement-breakpoint
ALTER TABLE "game" ALTER COLUMN "status" DROP NOT NULL;