import { Router } from "express";

import RolesController from "./roles.controller";

const RoutesRoles = new Router();


RoutesRoles.get("", RolesController.listRol);
RoutesRoles.get("/parameters", RolesController.getRolParameters);
RoutesRoles.post("/create", RolesController.createRol);
RoutesRoles.put("/update/:idRole", RolesController.updateRol);
RoutesRoles.get("/report", RolesController.downloadReportRoles);
RoutesRoles.get("/funcionalities", RolesController.getFuncionalities);
RoutesRoles.put("/updateFuncionalities/:idRole", RolesController.updateFuncionalitiesRol);


export default RoutesRoles;