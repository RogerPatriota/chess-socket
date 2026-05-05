
export interface GameCache {
    id: string;
    status: string;
    fen: string;
    version: number;
    blackPlayerId: string;
    whitePlayerId: string;
    turn: 'w' | 'b';
    lastMoveSan?: string;
    lastMoveBy?: string;
    lastMoveAt?: string;
    clockWhite: number;
    clockBlack: number;
    updateAt: string;
}