
export class Game{
    whitePlayerId?: string;
    blackPlayerId?: string; 
    status?: string;
    initial_fen: string;
    current_fen: string;


    constructor(whitePlayerId?: string, blackPlayerId?: string){
        this.whitePlayerId = whitePlayerId;
        this.blackPlayerId = blackPlayerId;
    }
}