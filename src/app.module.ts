import { Module } from '@nestjs/common';
import { EventModule } from './gateway/event.module';
import { GameModule } from './modules/game/game.module';
import { DatabaseModule } from './shared/database/database.module';
import { CacheModule } from './shared/cache/cache.module';

@Module({
  imports: [DatabaseModule, CacheModule, EventModule, GameModule],
  controllers: [],
  providers: [],
})

export class AppModule {}
