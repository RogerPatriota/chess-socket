import { IsString, IsOptional } from "class-validator";

class CreateGameDto {
    @IsString()
    @IsOptional()
    whitePlayerId?: string;
    
    @IsString()
    @IsOptional()
    blackPlayerId?: string;
}

export { CreateGameDto }