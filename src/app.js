require('dotenv').config();
const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");
const bodyParser = require('body-parser');

// parse body 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//set static directory
app.use(express.static('public'));

//set view engine and views directory
app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

//set port
const port = process.env.PORT || 3000;

// router modules
const contact = require("../routes/contact.js");

//routes
app.get("", (req, res) => {
  res.render("index.hbs");
});

app.get("/services", (req, res) => {
  res.render("services.hbs");
});

app.get("/our-work", (req, res) => {
  res.render("our-work.hbs");
});

app.use("/contact", contact);

app.listen(port, () => {
  console.log("listening on port: " + port);
})



