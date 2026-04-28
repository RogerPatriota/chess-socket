import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { IGameRepository } from './domain/game.repo.interface';
import { GameRepository } from './game.repository';


@Module({
  controllers: [GameController],
  providers: [
    {
      provide: IGameRepository,
      useClass: GameRepository
    },
    GameService
  ]
})
export class GameModule {}
