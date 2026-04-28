import { Module } from '@nestjs/common';
import { EventModule } from './gateway/event.module';
import { GameModule } from './game/game.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, EventModule, GameModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
