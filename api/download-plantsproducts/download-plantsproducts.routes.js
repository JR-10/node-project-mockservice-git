import { Router } from "express";

import downloadPlantsProductsController from "./download-plantsproducts.controller";

const RoutesDownloadPlantsProducts = new Router();

RoutesDownloadPlantsProducts.get("", downloadPlantsProductsController.downloadReportPlantsProducts);

export default RoutesDownloadPlantsProducts;