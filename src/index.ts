import express from "express";
import cors from "cors"
import { connectToDatabase } from "./db/db.js";

import {userRouter} from "./routes/userRoute.js"
import {classRouter} from "./routes/classRoute.js"

const app = express();

app.use(express.json());
app.use(cors());

connectToDatabase();

app.use('/user', userRouter);
app.use('/class', classRouter);

app.listen(3000, () => console.log("app is listning on port 3000"));
