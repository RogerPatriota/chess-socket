import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateGameDto } from '../types/dto/create.game.dto';
import { GameService } from '../game.service';

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

    @Get(':id')
    async getGameById(@Param('id') id: string) {
        const game = await this.gameService.getGameById(id);
        return game;
    }

    @Post()
    async createGame(@Body() data: CreateGameDto) {
        const game = await this.gameService.createGame(data);
        
        return game
    }
}
