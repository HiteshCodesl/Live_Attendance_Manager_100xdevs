import express from "express";
import cors from "cors";
import { connectToDatabase } from "./db/db.js";
import { userRouter } from "./routes/userRoute.js";
import { classRouter } from "./routes/classRoute.js";
import expressWs from "express-ws";
import { webSocketServer } from "./socket/ws.js";
const app = express();
const wsInstance = expressWs(app);
const wsServer = wsInstance.app;
app.use(express.json());
app.use(cors());
webSocketServer(wsServer);
connectToDatabase();
app.use('/user', userRouter);
app.use('/class', classRouter);
app.listen(3000, () => console.log("app is listning on port 3000"));
//# sourceMappingURL=index.js.map