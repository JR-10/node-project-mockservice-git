import { Router } from "express";

import PlantsProductsController from "./plants-products.controller";

const RoutesPlantsProducts = new Router();


RoutesPlantsProducts.post("/createPlantsProducts", PlantsProductsController.createPlantsProducts);
RoutesPlantsProducts.get("/products", PlantsProductsController.getProducts);
RoutesPlantsProducts.get("/typeProducts", PlantsProductsController.getTypeProducts);

RoutesPlantsProducts.get("/all", PlantsProductsController.getAllGroups);
RoutesPlantsProducts.get("/ById", PlantsProductsController.plantProductById);
RoutesPlantsProducts.get("/productById", PlantsProductsController.productById);
RoutesPlantsProducts.get("/typeProductById", PlantsProductsController.typeProductById);
RoutesPlantsProducts.get("/stateById", PlantsProductsController.stateById);
RoutesPlantsProducts.get("/startDateById", PlantsProductsController.startDateById);
RoutesPlantsProducts.get("/endDateById", PlantsProductsController.endDateById);
export default RoutesPlantsProducts;