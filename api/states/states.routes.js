import { Router } from "express";

import StatesController from "./states.controller";

const RoutesStates = new Router();


RoutesStates.get("", StatesController.listStates);
RoutesStates.get("/ByIdModule", StatesController.rolesByIdModule);


export default RoutesStates;