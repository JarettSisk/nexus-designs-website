const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

app.use(express.static('public'));

app.set('view engine', 'hbs');
app.set("views", path.join(__dirname, "../templates/views"));
hbs.registerPartials(path.join(__dirname, "../templates/partials"));

const port = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.render("index.hbs");
});

app.listen(port, () => {
  console.log("listening on port: " + port);
})
