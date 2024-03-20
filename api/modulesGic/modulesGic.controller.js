const dataModules = require("./data/data-modulesGic");
const dataSubModules = require("./data/data-submodulesGic");

class modulesGicController {

    static modulesById(req, res) {
        // id del usuario a consultar
        const id = req.query;
    
        const filterData = (data, query) =>
          data.filter((rec) =>
            Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
          );
    
        const resultData = filterData(dataModules.modulesGic, id);
    
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

  static subModulesById(req, res) {
    // id del usuario a consultar
    const id = req.query;

    const filterData = (data, query) =>
      data.filter((rec) =>
        Object.entries(query).every(([k, v]) => rec[k].toString().includes(v))
    );

    const resultData = filterData(dataSubModules.subModulesUser, id);

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

export default modulesGicController;