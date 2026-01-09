import WebSocket from "ws";
import { webSocketServer } from "./socket/ws.js";
import express from "express";
import expressWs from "express-ws";
import cors from "cors";
import { connectToDatabase } from "./db/db.js";
const w = new WebSocket("ws://localhost:3000/ws?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5NTU1Nzc4NWE1MWNlNDA2MWMyYjliZCIsInJvbGUiOiJ0ZWFjaGVyIiwiaWF0IjoxNzY3MjAwNjQxfQ.SWhoD_L33e2l2ZyZzC1-VqM9tEcM4bivu3GttwMWVPs");
const app = express();
connectToDatabase();
const wsInstance = expressWs(app);
const wsServer = wsInstance.app;
app.use(express.json());
app.use(cors());
webSocketServer(wsServer);
w.user = {
    userId: "123",
    role: "teacher"
};
app.listen(3000);
//# sourceMappingURL=test.js.map