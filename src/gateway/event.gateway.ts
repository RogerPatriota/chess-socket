import { WebSocketGateway, SubscribeMessage, WebSocketServer, OnGatewayConnection, OnGatewayDisconnect } from "@nestjs/websockets";
import { Server, Socket } from "socket.io";

@WebSocketGateway({
    cors: {
        origin: '*'
    }
})
export class EventGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()
    server: Server

    handleConnection(client: Socket) {
        console.log('Client connected', client.id)

        this.server.emit('user-connected', {
            message: 'New user connected! ID:',
            id: client.id
        })
    }

    handleDisconnect(client: Socket) {
        console.log('Client disconnected', client.id)

        this.server.emit('user-disconnected', {
            message: 'User disconnected! ID:',
            id: client.id
        })
    }

    @SubscribeMessage('ping')
    handleEvent() {
        console.log('pong')
    }

}
