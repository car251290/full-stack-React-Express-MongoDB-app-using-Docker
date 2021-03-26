var createError = require("http-erros");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var looger = require ("morgan")
cors = require("cors");

var indexRouter = require("./ApiRouter/index");
var usersRouter = require("./ApiRouter/users");
var testApiRouter = require("./ApiRouter/testDB")
var testDBRouter = require("./ApiRouter/testDB")

var app = express();

app.set(view,path.join(__dirname,view));
app.set("view engine","jade");

app.use(cors());
app.use(Logger("dev"));
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cookieParser);
app.use(express.static(path.join(__dirname,"public")));

app.use("/", indexRouter);
app.use("/users",usersRouter);
app.use("/testApi",testApiRouter);
app.use("/testDB",testDBRouter);

app.use(function(req,res,next){
    next(createError(404));
});

app.use(function(err,req,res,next){
    res.locals.message=err.message;
    res.locals.erros=req.app.get("env") === "develoment"? err : {}

    res.status(err.status || 500);
    res.render("error")
});

module.exports = app;



