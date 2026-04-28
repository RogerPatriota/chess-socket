import { Body, Controller, Post } from '@nestjs/common';
import { CreateGameDto } from './dto/create.game.dto';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
    constructor(
        private readonly gameService: GameService
    ) {}

    @Post()
    createGame(@Body() data: CreateGameDto) {
        const game = this.gameService.createGame(data);
        return game
    }
}
