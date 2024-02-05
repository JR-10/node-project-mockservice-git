const data = require("./data/data-download-users");

class downloadUsersController {

  static downloadReportUsers(req, res) {

    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: data.usersDownload,
      totalElements: data.usersDownload.length,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }
}

export default downloadUsersController;
