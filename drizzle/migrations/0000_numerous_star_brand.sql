CREATE TABLE "game" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"white_player_id" uuid NOT NULL,
	"black_player_id" uuid NOT NULL,
	"status" text NOT NULL,
	"fen" text NOT NULL,
	"current_fen" text NOT NULL,
	"created_at" timestamp DEFAULT now(),
	"updated_at" timestamp DEFAULT now()
);
