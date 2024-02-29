const data = require("./data/data-download-group");

class downloadGroupController{

    static downloadReportGroup(req, res) {

        // Response 200
        res.status(200).json({
          status: 200,
          message: "Successful",
          data: data.groupsDownload,
          totalElements: data.groupsDownload.length
        });
    
        // // Response 500
        // res.status(500).json({
        //   status: 500,
        //   message: "Error 500",
        // });
    }
}

export default downloadGroupController;