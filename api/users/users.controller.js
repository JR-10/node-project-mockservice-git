const dataUsers = require("./data/data-users");

class usersController {
  static allUsers(req, res) {

    const queryParams = {
      fullName: req.query.name,
      idRole: req.query.role,
      idState: req.query.state,
      startDate: req.query.startDate,
      endDate: req.query.endDate,
    }

    const filterData = (data, query) => {
      return data.filter((rec) => {
        // Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      });
    }

    const resultData = filterData(dataUsers.users, queryParams);

    // // ================= Start Paginacion =================
    // const paginationSize = req.query.paginationSize || 10;
    // const paginationKey = req.query.paginationKey || 0;

    // const start = paginationSize * paginationKey;
    // const end = Number(start) + Number(paginationSize);

    // const data = dataUsers.users.slice(start, end);

    // const totalData = dataUsers.users.length;
    // const pagesSize = totalData / paginationSize;
    // // ================= End Paginacion =================
  

    // // Response 200
    // res.status(200).json({
    //   status: 200,
    //   message: "Successful",
    //   data: data,
    //   pagination: {
    //     totalPages: pagesSize,
    //     totalElements: totalData,
    //   },
    // });
  
    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static usersParameters(req, res) {

    const query = req.query;

    // const queryParams = {
    //   fullName: req.query.name,
    //   idRole: req.query.role,
    //   idState: req.query.state,
    //   startDate: req.query.startDate,
    //   endDate: req.query.endDate,
    // }

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
}

export default usersController;
