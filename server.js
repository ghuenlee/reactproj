var express = require("express");
var server = express();

server.use(express.static("public"));

server.listen(process.env.PORT, process.env.IP, function () {
    console.log("Server Started on port ", process.env.IP,':',process.env.PORT);
});
