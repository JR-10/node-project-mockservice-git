const data = require("./data/data-download-parameters");

class downloadParametersController{

    static downloadReportParameters(req, res) {

        // Response 200
        res.status(200).json({
          status: 200,
          message: "Successful",
          data: data.parametersDownload,
          totalElements: data.parametersDownload.length
        });
    
        // // Response 500
        // res.status(500).json({
        //   status: 500,
        //   message: "Error 500",
        // });
    }
}

export default downloadParametersController;