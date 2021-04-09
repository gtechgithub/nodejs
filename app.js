const express = require('express');
const path = require('path');
const { config, engine } = require('express-edge');
const bodyParser = require('body-parser');


const app = express();


let database  = require("./database.js");
let dbopen = database.opendatabase();
app.use(express.static('public'));

/**
 * used for the express-js
// Automatically sets view engine and adds dot notation to app.render
app.use(engine);
app.set('views', `${__dirname}/views`);
 */

/** block for the html */
app.use(bodyParser.urlencoded({ extend: true }));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
app.use('/css',express.static(__dirname +'/css'));
app.use('/script',express.static(__dirname +'/script'));
app.use('/node_modules',express.static(__dirname +'/node_modules'));

/*
app.get('/script/jscript.js', function(req, res) {
    res.sendFile(path.resolve(__dirname, 'script/jscript.js'));
});
*/

app.get("/", (req, res) => {
    //res.send ("hello how r you");

    // res.sendFile(path.resolve(__dirname,"pages/index.html")) 

    res.render("pages/index.html", { name: 'gopal' });

    //res.render('index',{username: 'Gopal'});
});

app.get("/main", (req, res) => {


    res.render("pages/mainpage.html");
    // res.sendFile(path.resolve(__dirname,"pages/mainpage.html")) 


});


app.get("/leftmenu.html", (req, res) => {


    res.render("pages/leftmenu.html");
    // res.sendFile(path.resolve(__dirname,"pages/mainpage.html")) 


});


app.get("/rightmenu.html", (req, res) => {


    res.render("pages/rightmenu.html");
    // res.sendFile(path.resolve(__dirname,"pages/mainpage.html")) 


});


app.get("/addnew.html", (req, res) => {


    console.log("inside add new")
    res.render("pages/addnew.html");
    // res.sendFile(path.resolve(__dirname,"pages/mainpage.html")) 

});

app.post("/addnewsubmit",(req,res) => {

    console.log ("inside add new submit");
    console.log(req.body);
    console.log("settle acc:" + req.body.local_settle_account);
    console.log("settle acc:" + req.body.local_cash_account);
    console.log("settle acc:" + req.body.rec_amount);
    console.log("settle acc:" + req.body.pay_amount);
    console.log("settle acc:" + req.body.net_amount);
    console.log("settle acc:" + req.body.sec_trans);
    console.log("settle acc:" + req.body.status);
    console.log("settle acc:" + req.body.rms_code);

    let tradeDetails = {
        local_settle_account: req.body.local_settle_account,
        local_cash_account: req.body.local_cash_account,
        rec_amount:req.body.rec_amount,
        pay_amount:req.body.pay_amount,
        net_amount:req.body.net_amount,
        sec_trans:req.body.sec_trans,
        status:req.body.status,
        rms_code:req.body.rms_code
      };
    
    

    database.insert(dbopen,tradeDetails,res);


});

app.get("/update.html", (req, res) => {

    console.log("inside update")
    let model = {}
    res.render("pages/update.html", { track_id:"", model:model});


});

app.get("/retrieve.html", (req, res) => {

    console.log("inside retrieve")
    //res.render("pages/retrieve.html");
    database.select(dbopen,res,() => {

        res.render("pages/retrieve.html",{pagetitle: 'Edit Announcements', 
        datas: data.data})
    });

});

app.get("/addnewentries.html",(req,res) => {
    console.log("inside add new entries for bulk")

    let model = {}

    res.render("pages/addnewentries.html",{pagetitle: 'Edit Announcements', 
    datas: model});

});

app.post("/getupdatedetails",(req,res) => {

    console.log ("inside update");
  
    console.log("track_id:" + req.body.track_id);

    let updateDetails = {
        track_id: req.body.track_id,
       };
    
    
    database.retriveUpdateDetails(dbopen,updateDetails,res);


});

var server = app.listen(8080, () => {

    console.log("server is running now");

});