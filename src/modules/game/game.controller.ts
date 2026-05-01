import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateGameDto } from './dto/create.game.dto';
import { GameService } from './game.service';

@Controller('game')
export class GameController {
    constructor(
        private readonly gameService: GameService
    ) {}

    @Get()
    async getGames() {
        const games = await this.gameService.getGames();
        return games;
    }

    @Post()
    async createGame(@Body() data: CreateGameDto) {
        const game = await this.gameService.createGame(data);
        
        return game
    }
}
