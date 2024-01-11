const sql = require("mssql/msnodesqlv8");

const servernameN = "DESKTOP-MFU2TT6";

const config = {
  user: "sa",
  password: "123456",
  server: servernameN,
  database: "dialy",
  driver: "msnodesqlv8",
  synchronize: true,
  trustServerCertificate: true,
  options: {
    trustedconnection: true,
    enableArithAbort: true,
  },
};

function Runquery(query,callback){
  sql.connect(config, function (err) {
    if (err) {
      console.log(err);
    }
    var request = new sql.Request();
    request.query(query, function (err, recordset) {
      console.log("dang day");
      if (err) console.log(err);
      sql.close();
      callback(null, recordset.recordset);
    });
  });
}



//Thêm hàm gì bỏ vô đây
module.exports = {
    Runquery: Runquery,
};
  
  