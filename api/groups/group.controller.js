const dataGroups = require("./data/data-groups");
const dataUsers = require("./data/data-users");

class groupController{

     /**
   * @description Metodo para obtener los grupos (post)
   * @param {*} req
   * @param {*} res
   */
  static allGroups(req, res) {
    const bodyQuery = {
      name: req.body.name,
      description: req.body.description,
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
      const data = dataGroups.groups.slice(start, end);
      const totalData = dataGroups.groups.length;
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
      const resultData = filterData(dataGroups.groups, bodyQuery);
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

  static getAllGroups(req, res) {
    const queryParams = {
        idGroup: req.body.idGroup,
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
      const data = dataGroups.groups.slice(start, end);
      const totalData = dataGroups.groups.length;
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
      const resultData = filterData(dataGroups.groups, queryParams);
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

  static groupById(req, res) {
    // id del usuario a consultar
    const idGroup = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataGroups.groups, idGroup);

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

  static groupByIdState(req, res) {
    // id del usuario a consultar
    const idState = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataGroups.groups, idState);

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

  static groupsByStartDate(req, res) {
    const startDate = req.query;
      

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataGroups.groups, startDate);

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

  static groupsByEndDate(req, res) {
    
    const endDate = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataGroups.groups, endDate);

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

  static groupsParameters(req, res) {
    const query = req.query;
    
    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(dataGroups.groups, query);

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

  static createGroup(req, res) {

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

  static updateGroup(req, res) {

    const idGroup = Number(req.params.idGroup);
    const bodyUpdate = req.body;

    const userIndex = dataGroups.groups.findIndex((group) => group.idGroup === idGroup);

    if (userIndex !== -1) {
      res.json({
        status: 200,
        message: "Grupo actualizado exitosamente",
        data: true,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "Grupo no encontrado para actualizar",
      });
    }

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }


  static getUsers(req, res) {

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: dataUsers.users,
      totalElements: dataUsers.users.length,
    });

    // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static updateUsersGroup(req, res) {

    const idGroup = Number(req.params.idGroup);
    const bodyUpdateUsers = req.body;

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

export default groupController;
