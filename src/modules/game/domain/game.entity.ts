
export class Game{
    id?:string;
    whitePlayerId?: string;
    blackPlayerId?: string; 
    status?: string;
    initialFen: string;
    currentFen: string;
    createdAt?: Date;
    updatedAt?: Date;

    constructor(whitePlayerId?: string, blackPlayerId?: string){
        this.whitePlayerId = whitePlayerId;
        this.blackPlayerId = blackPlayerId;
    }
}