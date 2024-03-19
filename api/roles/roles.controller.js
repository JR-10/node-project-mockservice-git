const dataRoles = require("./data/data-roles");
const dataRolesReport = require("./data/report-data-roles");
const dataFuncionalities = require("./data/data-funcionalities");

class rolesController {
  static listRol(req, res) {

    const queryParamsRoles = req.query;
    console.log('valor de los parametros de consulta: ', queryParamsRoles)

    if (Object.keys(queryParamsRoles).length === 0) {
      // Response 200
      res.status(200).json({
        status: 200,
        message: "Successful",
        data: dataRoles.roles,
        totalElements: dataRoles.roles.length,
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
      const resultData = filterData(dataRoles.roles, queryParamsRoles);

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

  static getRolParameters(req, res) {
    const queryParamsRoles = {
      idRole: req.query.idRole,
      idState: req.query.idState,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
    };

    for (const i in queryParamsRoles) {
      if (queryParamsRoles[i] === undefined) {
        delete queryParamsRoles[i];
      }
    }

    if (Object.keys(queryParamsRoles).length === 0) {
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
    } else {
      const filterData = (data, query) =>
        data.filter((rec) =>
          Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
        );
      const resultData = filterData(dataRoles.roles, queryParamsRoles);
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

  static createRol(req, res) {

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

  static updateRol(req, res) {

    const idRole = req.params.idRole;
    const bodyUpdate = req.body;

    console.log('@@@@', idRole);

    const userIndex = dataRoles.roles.findIndex((role) => role.idRole === idRole);

    if (userIndex !== -1) {
      res.json({
        status: 200,
        message: "Rol actualizado exitosamente",
        data: true,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Rol no encontrado para actualizar",
      });
    }

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static downloadReportRoles(req, res) {

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: dataRolesReport.rolesReport,
      totalElements: dataRolesReport.rolesReport.length,
    });

    // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }


  static getFuncionalities(req, res) {

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: dataFuncionalities.funcionalities,
      totalElements: dataFuncionalities.funcionalities.length,
    });

    // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }


  static updateFuncionalitiesRol(req, res) {

    const idRole = Number(req.params.idRole);
    const bodyUpdateFuncionalities = req.body;

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

}

export default rolesController;
