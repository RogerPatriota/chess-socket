import { Module } from '@nestjs/common';
import { EventModule } from './gateway/event.module';
import { GameModule } from './game/game.module';

@Module({
  imports: [EventModule, GameModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
