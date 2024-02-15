const dataLimits = require("./data/data-limits");

class limitsController {

  static getLimits(req, res) {
    const queryParamsLimits = {
      idProduct: req.query.idProduct,
      idAlert: req.query.idAlert,
      parametro:req.query.parametro,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
    };

    for (const i in queryParamsLimits) {
      if (queryParamsLimits[i] === undefined) {
        delete queryParamsLimits[i];
      }
    }

    if (Object.keys(queryParamsLimits).length === 0) {
      // Response 200
      res.status(200).json({
        status: 200,
        message: "Successful",
        data: dataLimits.limits,
        totalElements: dataLimits.limits.length,
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
      const resultData = filterData(dataLimits.limits, queryParamsLimits);

      // Response 200
      res.status(200).json({
        status: 200,
        message: "Successful",
        data: resultData,
        totalElements: totalData.limits.length,
      });

      // // Response 500
      // res.status(500).json({
      //   status: 500,
      //   message: "Error 500",
      // });
    }
  }

  static
}

export default limitsController;
