const dataParameters = require("./data/data-parameters");

class parametersController {
  static listParameters(req, res) {
    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: dataParameters.parameters,
      totalElements: dataParameters.parameters.length,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static getParametersFilters(req, res) {

    const queryParams = req.query;

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
        data: dataParameters.parameters,
        totalElements: dataParameters.parameters.length,
      });
    } else {
      let resultData = filterArray(dataParameters.parameters, queryParams);
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

export default parametersController;
