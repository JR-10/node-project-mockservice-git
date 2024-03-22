import { Router } from "express";

import downloadParametersController from "./download-parameters.controller";

const RoutesDownloadParameters = new Router();

RoutesDownloadParameters.get("", downloadParametersController.downloadReportParameters);

export default RoutesDownloadParameters;