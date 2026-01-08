import "express-ws";
import jwt, {} from "jsonwebtoken";
const allWebSocketConnections = [];
export function webSocketServer(wsserver) {
    wsserver.ws('/ws', (ws, req) => {
        const token = req.query.token;
        if (!token) {
            ws.close();
            return;
        }
        const { id, role } = jwt.verify(token, process.env.JWT_SECRET);
        allWebSocketConnections.push({ ws, userId: id, role });
        ws.on('message', (data) => {
            ws.send(data.toString());
            console.log(id, role);
            console.log(data.toString());
        });
        ws.on('close', () => {
            allWebSocketConnections.filter(x => x.ws !== ws);
        });
        console.log(allWebSocketConnections);
    });
}
//# sourceMappingURL=ws.js.map