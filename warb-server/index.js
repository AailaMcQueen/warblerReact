require("dotenv").config();
const express = require("express")
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/error")
const authRoutes = require("./routes/auth")

const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());
app.use("/api/auth", authRoutes)

app.use(function(req, res, next){
    let error = new Error("Not found!");
    error.status = 404;
    next(error);
})
app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`Server started on ${PORT}`);
})