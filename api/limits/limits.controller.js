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
      const paginationSize = req.query.paginationSize || 10;
      const paginationKey = req.query.paginationKey || 0;
      const start = paginationSize * paginationKey;
      const end = Number(start) + Number(paginationSize);
      const data = dataLimits.limits.slice(start, end);
      const totalData = dataLimits.limits.length;
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
      const resultData = filterData(dataLimits.limits, queryParamsLimits);
      const paginationSize = req.body.paginationSize || 10;
      const paginationKey = req.body.paginationKey || 0;
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

  static
}

export default limitsController;
