
import { Router } from "express";

import groupController from "./group.controller";

const RoutesGroups = new Router();

RoutesGroups.post("/allGroups", groupController.allGroups);
RoutesGroups.get("/all", groupController.getAllGroups);
RoutesGroups.post("/create", groupController.createGroup);
RoutesGroups.put("/update/:idGroup", groupController.updateGroup);
RoutesGroups.get("/parameters", groupController.groupsParameters);
RoutesGroups.get("/ById", groupController.groupById);
RoutesGroups.get("/ByidState", groupController.groupByIdState);
RoutesGroups.get("/ByStartDate", groupController.groupsByStartDate);
RoutesGroups.get("/ByEndDate", groupController.groupsByEndDate);
//RoutesGroups.put("/updateGroup/:ById", groupController.updateGroup);


export default RoutesGroups;
