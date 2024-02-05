import { Router } from "express";

import downloadUsersController from "./download-users.controller";

const RoutesDownloadUsers = new Router();


RoutesDownloadUsers.get("", downloadUsersController.downloadReportUsers);


export default RoutesDownloadUsers;