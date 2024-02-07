import { Router } from "express";

import RolesController from "./roles.controller";

const RoutesRoles = new Router();


RoutesRoles.get("", RolesController.listRol);
RoutesRoles.get("/parameters", RolesController.getRolParameters);


export default RoutesRoles;