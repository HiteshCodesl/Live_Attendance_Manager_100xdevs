import "express-ws";
import type { Application } from "express-ws";
import jwt, { type JwtPayload } from "jsonwebtoken"
import type WebSocket from "ws";

interface WebSocketInterface {
    ws: WebSocket,
    userId: string,
    role: string
}

const allWebSocketConnections: WebSocketInterface[] = [];

export function webSocketServer(wsserver: Application) {
    wsserver.ws('/ws', (ws, req) => {

        const token = req.query.token as string;

        if (!token) {
            ws.close();
            return;
        }
        
        const { id, role } = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
            
        allWebSocketConnections.push({ ws, userId: id, role });
   
        ws.on('message', (data) => {
            ws.send(data.toString());
            console.log(id, role);
            console.log(data.toString());
        })

        ws.on('close', () => {
            allWebSocketConnections.filter(x => x.ws !== ws)
        })

        console.log(allWebSocketConnections);
    })
}





