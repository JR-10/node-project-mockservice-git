import express from "express";
import bodyParser from 'body-parser';

import RoutesProducts from "./api/products/products.routes";
import RoutesUsers from "./api/users/users.routes";
import RoutesDownloadUsers from "./api/download-users/download-users.routes";
import RoutesRoles from "./api/roles/roles.routes";
import RoutesStates from "./api/states/states.routes";
import RoutesLimits from "./api/limits/limits.routes";


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

// definicion del puerto
const server = app.listen(process.env.PORT || 3040, () => {
    console.log(
        `Express server puerto ${server.address().port}: \x1b[32m%s\x1b[0m`,
        "online"
    );
});

export default app;