const dataStates = require("./data/data-states");

class statesController {
  static listStates(req, res) {
    // Response 200
    res.status(200).json({
      status: 200,
      message: "Successfull",
      data: dataStates.states,
      totalElements: dataStates.states.length,
    });

    // // Response 500
    // res.status(500).json({
    //   status: 500,
    //   message: "Error 500",
    // });
  }

  static rolesByIdModule(req, res) {
    const idModule = req.query.idModule; // Id del modulo a consultar
    const userIndex = dataStates.states.findIndex((state) => state.idModule === idModule);

    if (userIndex !== -1) {
      const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
      );
      const resultData = filterData(dataStates.states, req.query);
      res.status(200).json({
        status: 200,
        message: "Successful",
        data: resultData,
        totalElements: resultData.length,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "estado no encontrado",
      });
    }
  }

  

}

export default statesController;
