
import { Router } from "express";

import groupController from "./group.controller";

const RoutesGroups = new Router();

RoutesGroups.post("/allGroups", groupController.allGroups);
RoutesGroups.get("/all", groupController.getAllGroups);
//RoutesGroups.get("/parameters", groupController.groupsParameters);
//RoutesGroups.get("/ById", groupController.groupById);
//RoutesGroups.put("/updateGroup/:ById", groupController.updateGroup);


export default RoutesGroups;
