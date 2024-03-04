import { Router } from "express";

import downloadGroupController from "./download-group.controller";

const RoutesDownloadGroup = new Router();

RoutesDownloadGroup.get("", downloadGroupController.downloadReportGroup);

export default RoutesDownloadGroup;