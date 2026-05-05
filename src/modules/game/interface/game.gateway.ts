import { OnGatewayConnection, OnGatewayDisconnect, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { Socket, Server } from "socket.io";



@WebSocketGateway({
    namespace: 'game',
    cors: {
        origin: '*'
    }
})
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
    
    @WebSocketServer()
    server: Server
    
    handleConnection(client: Socket) {
        const gameId = client.handshake.query.gameId as string;

        console.log(`Client Connected: ${client.id}`);

        if (gameId) {
            client.join(gameId);
            console.log(`Client ${client.id} joined game room: ${gameId}`);

            this.server.to(gameId).emit('user-connected', {
                message: 'New user connected to this game!',
                id: client.id
            });
        } else {
            console.log(`Client ${client.id} connected but no gameId provided.`);
            client.disconnect();
        }
    } 

    handleDisconnect(client: Socket) {
        const gameId = client.handshake.query.gameId as string;
        console.log(`Client disconnected: ${client.id}`);

        if (gameId) {
            this.server.to(gameId).emit('user-disconnected', {
                message: 'User disconnected from this game!',
                id: client.id
            });
        }
    }
    
}