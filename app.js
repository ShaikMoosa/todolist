//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
let items = ["Buy Food", "Cook Food", "Eat Food"];
let workItems = [];

app.use("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){
  
  let day = date.getDate();

  // res.render("list", {kindOfDay: day, newListItems: items}); I
  res.render("list", {ListTitle: day, newListItems: items});
});
  

// app.post("/", function(req, res) {
//   let item = req.body.newItem;
//   items.push(item);
//   res.redirect("/");
//   });
app.post("/",function(req, res){
  let item = req.body.newItem;
  if (req.body.list === "work"){
    workitems.push(item);
    res.redirect("/work");
  } else{
    workitems.push(item);
    res.redirect("/");
  }

});
  app.post("/work", function(req, res){
    res.render("list", {listTitle: "work List", newListItem: workItems});
  });
app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
