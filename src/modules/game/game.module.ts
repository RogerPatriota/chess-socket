import { Module } from '@nestjs/common';
import { GameController } from './interface/game.controller';
import { GameService } from './game.service';
import { IGameRepository } from './domain/game.repo.interface';
import { GameRepository } from './infra/game.repository';
import { GameGateway } from './interface/game.gateway';
import { GameCacheRepository } from './infra/game.cache.repository';


@Module({
  controllers: [GameController],
  providers: [
    {
      provide: IGameRepository,
      useClass: GameRepository
    },
    GameGateway,
    GameService,
    GameCacheRepository
  ],
})
export class GameModule {}
