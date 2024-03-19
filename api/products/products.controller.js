const dataProducts = require("./data/data");

class productsController {
  static listProducts(req, res) {
    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: dataProducts.products,
      totalElements: dataProducts.products.length,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static getProductParameters(req, res) {
    const queryParams = {
      idProduct: req.query.idProduct,
      nameManager: req.query.nameManager,
      idState: req.query.idState,
    }

    for (const i in queryParams) {
      if (queryParams[i] === undefined) {
        delete queryParams[i];
      }
    }

    const filterArray = (array, filterObject) => {
      return array.filter(item =>
        Object.entries(filterObject).every(([key, value]) =>
          item[key] ? item[key].toString().includes(value) : false
        )
      );
    }

    if (Object.keys(queryParams).length === 0) {
      // Response 200
      res.status(200).json({
        status: 200,
        message: "Successful",
        data: dataProducts.products,
        totalElements: dataProducts.products.length,
      });
    } else {
      let resultData = filterArray(dataProducts.products, queryParams);
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


}

export default productsController;
