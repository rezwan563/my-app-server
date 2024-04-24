import express from "express"
import { sayHi } from "./home.controller";
const homeRouter = express.Router();

homeRouter.get('/', sayHi);

export default homeRouter;