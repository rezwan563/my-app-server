import express from "express"
import { sayHi } from "./home.controller";
// import { checkAuth } from "../../middleware/checkAuth";
const homeRouter = express.Router();

homeRouter.get('/', 
sayHi);

export default homeRouter;