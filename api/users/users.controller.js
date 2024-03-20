const dataUsers = require("./data/data-users");
const dataImportUsers = require("./data/data-import-users");

class usersController {
  /**
   * @description Metodo para obtener los usuarios (post)
   * @param {*} req
   * @param {*} res
   */
  static allUsers(req, res) {
    const bodyQuery = {
      nameUser: req.body.nameUser,
      fullName: req.body.name,
      idRole: req.body.idRole,
      idState: req.body.idState,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    };

    for (const i in bodyQuery) {
      if (bodyQuery[i] === undefined) {
        delete bodyQuery[i];
      }
    }

    if (Object.keys(bodyQuery).length === 0) {
      const paginationSize = req.body.paginationSize || 10;
      const paginationKey = req.body.paginationKey || 0;
      const start = paginationSize * paginationKey;
      const end = Number(start) + Number(paginationSize);
      const data = dataUsers.users.slice(start, end);
      const totalData = dataUsers.users.length;
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
      const resultData = filterData(dataUsers.users, bodyQuery);
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

  static getAllUsers(req, res) {
    const queryParams = {
      // nameUser: req.query.nameUser,
      fullName: req.query.fullName,
      idRole: req.query.idRole,
      idState: req.query.idState,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
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
      const data = dataUsers.users.slice(start, end);
      const totalData = dataUsers.users.length;
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
      const resultData = filterData(dataUsers.users, queryParams);
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

  static usersParameters(req, res) {
    const query = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataUsers.users, query);

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

  static userById(req, res) {
    // id del usuario a consultar
    const id = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataUsers.users, id);

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

  static updateUser(req, res) {
    const idUser = Number(req.params.ById); // Id del usuario a actualizar;
    const bodyUpdate = req.body;

    const userIndex = dataUsers.users.findIndex((user) => user.id === idUser);

    if (userIndex !== -1) {
      res.json({
        status: 200,
        message: "Usuario actualizado exitosamente",
        data: bodyUpdate,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Usuario no encontrado para actualizar",
      });
    }
  }


  static getUsersImport(req, res) {

    const parameterQuery = req.query;

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: dataImportUsers.importUsers,
      totalElements: dataImportUsers.importUsers.length,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static saveUsersImport(req, res) {

    const parameterBody = req.body;

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
}

export default usersController;
