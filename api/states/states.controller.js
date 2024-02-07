const dataStates = require("./data/data-states");

class statesController {
  static listStates(req, res) {
    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successful",
      data: dataStates.states,
      totalElements: dataStates.states.length,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

}

export default statesController;
