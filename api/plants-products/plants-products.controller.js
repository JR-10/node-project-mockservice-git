// import { v4 as uuidv4 } from 'uuid';

const dataProducts = require("./data/data-products");
const dataTypeProducts = require("./data/data-type-products");



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
    // for (let i = 0; i < 10; i++) {
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


}

export default plantsProductsController;
