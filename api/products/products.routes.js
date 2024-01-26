import { Router } from "express";

import productsController from "./products.controller";

const RoutesProducts = new Router();


RoutesProducts.get("/all", productsController.listProducts);
RoutesProducts.get("/parameters", productsController.getProductParameters);


export default RoutesProducts;