const data = require("./data/data");

class productsController {
  static listProducts(req, res) {
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: data.products,
      totalElements: data.products.length,
    });
  }

  static getProductParameters(req, res) {
    const query = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(data.products, query);

    res.status(200).json({
      status: 200,
      message: "Successful",
      data: resultData,
      totalElements: resultData.length,
    });
  }
}

export default productsController;
