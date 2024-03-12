import { Router } from "express";

import usersController from "./users.controller";

const RoutesUsers = new Router();


RoutesUsers.post("/allUsers", usersController.allUsers);
RoutesUsers.get("/all", usersController.getAllUsers);
RoutesUsers.get("/parameters", usersController.usersParameters);
RoutesUsers.get("/ById", usersController.userById);
RoutesUsers.put("/updateUser/:ById", usersController.updateUser);
RoutesUsers.get("/getUserImport", usersController.getUsersImport);
RoutesUsers.post("/userImport", usersController.saveUsersImport);


export default RoutesUsers;