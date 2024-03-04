import { Router } from "express";

import PlantsProductsController from "./plants-products.controller";

const RoutesPlantsProducts = new Router();


RoutesPlantsProducts.post("/createPlantsProducts", PlantsProductsController.createPlantsProducts);
RoutesPlantsProducts.get("/products", PlantsProductsController.getProducts);
RoutesPlantsProducts.get("/typeProducts", PlantsProductsController.getTypeProducts);


export default RoutesPlantsProducts;