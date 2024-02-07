import { Router } from "express";

import usersController from "./users.controller";

const RoutesUsers = new Router();


RoutesUsers.get("/all", usersController.allUsers);
RoutesUsers.get("/parameters", usersController.usersParameters);
RoutesUsers.get("/ById", usersController.userById);


export default RoutesUsers;