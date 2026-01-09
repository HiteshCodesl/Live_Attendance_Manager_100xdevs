import "express-ws";
import jwt, {} from "jsonwebtoken";
const allWebSocketConnections = [];
export function webSocketServer(wsserver) {
    wsserver.ws('/ws', (ws, req) => {
        const socket = ws;
        const token = req.query.token;
        if (!token) {
            ws.close();
            return;
        }
        const { id, role } = jwt.verify(token, process.env.JWT_SECRET);
        socket.user = { userId: id, role };
        allWebSocketConnections.push({ ws, userId: id, role });
        console.log("socket", socket);
        console.log("ws", ws);
        // ws.on('message', (data) => {
        //     if(socket)  
        // })
        ws.on('close', () => {
            allWebSocketConnections.filter(x => x.ws !== ws);
        });
        console.log(allWebSocketConnections);
    });
}
//# sourceMappingURL=ws.js.map