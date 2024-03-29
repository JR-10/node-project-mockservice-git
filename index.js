import express from "express";
import bodyParser from 'body-parser';

import RoutesProducts from "./api/products/products.routes";
import RoutesUsers from "./api/users/users.routes";
import RoutesDownloadUsers from "./api/download-users/download-users.routes";
import RoutesRoles from "./api/roles/roles.routes";
import RoutesStates from "./api/states/states.routes";
import RoutesLimits from "./api/limits/limits.routes";
import RoutesGroups from "./api/groups/groups.routes";
import RoutesDownloadGroup from "./api/download-group/download-group.routes";
import RoutesPlantsProducts from "./api/plants-products/plants-products.routes";
import RoutesParameters from "./api/parameters/parameters.routes";
import RoutesModulesGic from "./api/modulesGic/modulesGic.routes";
import RoutesDownloadPlantsProducts from "./api/download-plantsproducts/download-plantsproducts.routes";
import RoutesDownloadParameters from "./api/download-parameters/download-parameters.routes";
const app = express();

// Peticiones con Body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Permitir llamados CROSS
app.use(function(req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE,PATCH");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "*",
        "Access-Control-Allow-Origin,Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,Authorization"
    );

    // intercept OPTIONS method
    if ("OPTIONS" == req.method) {
        res.sendStatus(200);
    } else {
        next();
    }
});




app.get("/", (req, res) =>
    res.send("Bienvenidos a la api de GIC")
);

// ruta servicio
app.use("/gic/products", RoutesProducts);
app.use("/gic/users", RoutesUsers);
app.use("/gic/reportUsers", RoutesDownloadUsers);
app.use("/gic/roles", RoutesRoles);
app.use("/gic/states", RoutesStates);
app.use("/gic/limits", RoutesLimits);
app.use("/gic/groups", RoutesGroups);
app.use("/gic/reportGroups", RoutesDownloadGroup);
app.use("/gic/plants-products", RoutesPlantsProducts);
app.use("/gic/parameters", RoutesParameters);
app.use("/gic/modules", RoutesModulesGic);
app.use("/gic/reportPlantsProducts", RoutesDownloadPlantsProducts);
app.use("/gic/reportParameters", RoutesDownloadParameters);



// definicion del puerto
const server = app.listen(process.env.PORT || 3040, () => {
    console.log(
        `Express server puerto ${server.address().port}: \x1b[32m%s\x1b[0m`,
        "online"
    );
});

export default app;