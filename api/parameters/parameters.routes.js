import { Router } from "express";

import parametersController from "./parameters.controller";

const RoutesParameters = new Router();


RoutesParameters.get("/all", parametersController.listParameters);
RoutesParameters.get("/filters", parametersController.getParametersFilters);


export default RoutesParameters;