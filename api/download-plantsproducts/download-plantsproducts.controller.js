const data = require("./data/data-download-plantsproducts");

class downloadPlantsProductsController{

    static downloadReportPlantsProducts(req, res) {

        // Response 200
        res.status(200).json({
          status: 200,
          message: "Successful",
          data: data.plantsProductsDownload,
          totalElements: data.plantsProductsDownload.length
        });
    
        // // Response 500
        // res.status(500).json({
        //   status: 500,
        //   message: "Error 500",
        // });
    }
}

export default downloadPlantsProductsController;