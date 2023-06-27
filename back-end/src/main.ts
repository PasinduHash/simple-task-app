import express, {json} from 'express';
import cors from 'cors';
import {router} from "./api/task-controller";

console.log("working")
const app = express();

app.use(json());
app.use(cors());
app.use("/app/api/v1/tasks", router);
app.listen(8080, () => console.log("Server has been started at 8080"));