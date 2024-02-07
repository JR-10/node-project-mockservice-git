const dataRoles = require("./data/data-roles");

class rolesController {
  static listRol(req, res) {


    const paginationSize = req.query.paginationSize || 10;
    const paginationKey = req.query.paginationKey || 0;

    const start = paginationSize * paginationKey;
    const end = Number(start) + Number(paginationSize);

    const data = dataRoles.roles.slice(start, end);

    const totalData = dataRoles.roles.length;
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

  static getRolParameters(req, res) {
    const query = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(data.roles, query);

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

export default rolesController;
