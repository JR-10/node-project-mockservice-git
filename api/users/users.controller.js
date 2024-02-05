const data = require("./data/data-users");

class usersController {
  static listUsers(req, res) {
  
    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: data.users,
      totalElements: data.users.length,
    });
  
    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static getUserParameters(req, res) {
    const query = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );

    const resultData = filterData(data.users, query);

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
