import { Router } from "express";

import usersController from "./users.controller";

const RoutesUsers = new Router();


RoutesUsers.get("/all", usersController.listUsers);
RoutesUsers.get("/parameters", usersController.getUserParameters);


export default RoutesUsers;