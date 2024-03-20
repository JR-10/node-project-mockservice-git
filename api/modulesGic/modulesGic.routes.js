import { Router } from "express";

import modulesGicController from "./modulesGic.controller";

const RoutesModulesGic = new Router();

RoutesModulesGic.get("/getModulesById", modulesGicController.modulesById);
RoutesModulesGic.get("/getSubModulesById", modulesGicController.subModulesById);

export default RoutesModulesGic;