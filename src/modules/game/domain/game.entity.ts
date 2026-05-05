
export class Game{
    id?:string;
    whitePlayerId?: string;
    blackPlayerId?: string; 
    status: string;
    initialFen: string;
    currentFen: string;
    createdAt?: Date;
    updatedAt?: Date;
    clockWhite: number;
    clockBlack: number;
    
    constructor(whitePlayerId?: string, blackPlayerId?: string){
        this.whitePlayerId = whitePlayerId;
        this.blackPlayerId = blackPlayerId;
    }
}