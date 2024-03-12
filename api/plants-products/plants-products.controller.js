import { v4 as uuidv4 } from 'uuid';

const dataProducts = require("./data/data-products");
const dataTypeProducts = require("./data/data-type-products");
const dataPlantsProducts = require("./data/data-plants-products");


class plantsProductsController {


  static createPlantsProducts(req, res) {

    const bodyCreate = req.body;

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: true,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }


  static getProducts(req, res) {

    // let arrayUuid = [];
    // for (let i = 0; i < 30; i++) {
    //   const guid = uuidv4();
    //   console.log('valor de guid: ', guid);
    //   arrayUuid.push(guid);
    // }
    // console.log('valor de arrayUuid: ', arrayUuid);


    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: dataProducts.products,
      totalElements: dataProducts.products.length,
    });

    // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }


  static getTypeProducts(req, res) {

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: dataTypeProducts.typeProducts,
      totalElements: dataTypeProducts.typeProducts.length,
    });

    // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static getAllGroups(req, res) {
    const queryParams = {
        idPlant: req.body.idPlant,
        idProduct: req.body.idProduct,
        idTypeProduct: req.body.idTypeProduct,
        idState: req.body.idState,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
    };

    for (const i in queryParams) {
      if (queryParams[i] === '' || queryParams[i] === undefined) {
        delete queryParams[i];
      }
    }

    if (Object.keys(queryParams).length === 0) {
      const paginationSize = req.query.paginationSize || 10;
      const paginationKey = req.query.paginationKey || 0;
      const start = paginationSize * paginationKey;
      const end = Number(start) + Number(paginationSize);
      const data = dataPlantsProducts.plantsProducts.slice(start, end);
      const totalData = dataPlantsProducts.plantsProducts.length;
      const pagesSize = totalData / paginationSize;

      // Response 200
      res.status(200).json({
        status: 200,
        message: "Successful",
        data: data,
        pagination: {
          totalPages: pagesSize,
          totalElements: totalData,
        },
      });

      // // Response 500
      // res.status(500).json({
      //   status: 500,
      //   message: "Error 500",
      // });
    } else {
      const filterData = (data, query) =>
        data.filter((rec) =>
          Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
        );
      const resultData = filterData(dataPlantsProducts.plantsProducts, queryParams);
      const paginationSize = req.query.paginationSize || 10;
      const paginationKey = req.query.paginationKey || 0;
      const start = paginationSize * paginationKey;
      const end = Number(start) + Number(paginationSize);
      const data = resultData.slice(start, end);
      const totalData = resultData.length;
      const pagesSize = totalData / paginationSize;

      // Response 200
      res.status(200).json({
        status: 200,
        message: "Successful",
        data: data,
        pagination: {
          totalPages: pagesSize,
          totalElements: totalData,
        },
      });

      // // Response 500
      // res.status(500).json({
      //   status: 500,
      //   message: "Error 500",
      // });
    }
  }

  static plantProductById(req, res) {
    // id del usuario a consultar
    const idPlant = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataPlantsProducts.plantsProducts, idPlant);

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: resultData,
      totalElements: resultData.length,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static productById(req, res) {
    // id del usuario a consultar
    const idProduct = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataPlantsProducts.plantsProducts, idProduct);

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: resultData,
      totalElements: resultData.length,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static typeProductById(req, res) {
    // id del usuario a consultar
    const idTypeProduct = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataPlantsProducts.plantsProducts, idTypeProduct);

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: resultData,
      totalElements: resultData.length,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static stateById(req, res) {
    // id del usuario a consultar
    const idState = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataPlantsProducts.plantsProducts, idState);

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: resultData,
      totalElements: resultData.length,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static startDateById(req, res) {
    // id del usuario a consultar
    const startDate = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataPlantsProducts.plantsProducts,startDate);

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: resultData,
      totalElements: resultData.length,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static endDateById(req, res) {
    // id del usuario a consultar
    const endDate = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataPlantsProducts.plantsProducts,endDate);

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: resultData,
      totalElements: resultData.length,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }
  
}

export default plantsProductsController;
