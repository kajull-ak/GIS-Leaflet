const express = require("express");
const app = express();  

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));
app.use(express.static("map/home"));
app.use(express.static("map/home/map"));

 app.get("/",function(req,res){
  res.sendFile(__dirname+ "/log-in.html");
   /* res.send("<h1>Log in redirect </h1> user name : dispatcher / pass: 1234 <a href = 'http://127.0.0.1:5500/test2/map/log-in.html'>log in --> </a>"); */// u can send all type of shit html ...
  });
 
  app.post("/",function(req,res){

    var n1 = String(req.body.user);
  
   /*  var n2 = Number(req.body.hight); */
   var link1 = "/map/home/Dispatcher.html";
   var link2 = "/map/home/Maintenance Responsible.html";
   var link3 = "/map/home/Signaling Technician.html";
   var link4 = "/map/home/Traffic Controller.html";
   var link5 = "/wronginput.html";
  
   switch (n1) {
    case "dispatcher":
      link = link1;
      break;
    case "Maintenance":
      link = link2;
      break;
    case "Signaling":
      link = link3;
      break;
    case "Traffic":
      link = link4;
      break;
    default: link = link5;
      break;
   }
  /*  if (n1 == 1) {
    link = link1;
   }else{
    link = link2;
   } */
  
   res.sendFile(__dirname+link);
    /* var result = n1 / (n2*n2); */
    
    
  
  
  });

  

app.listen(3000, function () {
  console.log("the server is up and Running on port 3000");
  });