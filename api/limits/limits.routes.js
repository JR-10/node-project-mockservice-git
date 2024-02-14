import { Router } from "express";

import LimitsController from "./limits.controller";

const RoutesLimits = new Router();


RoutesLimits.get("", LimitsController.getLimits);


export default RoutesLimits;