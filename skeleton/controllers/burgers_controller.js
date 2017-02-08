var express = require("express");

var router = express.Router();
var Burger = require("../models/burger.js");

// get route -> index


router.get("/api/burgers", function(req, res) {
  // express callback response by calling burger.selectAllBurger
  Burger.burgers.findAll({})(function(data) {
    // Wrapping the array of returned burgers in a object so it can be referenced inside our handlebars
    var hbsObject = { burgers: data };
    res.render("index", hbsObject);
  });
});

// post route -> back to index
router.post("/api/burgers", function(req, res) {
  // takes the request object using it as input for buger.addBurger
  Burger.burgers.create({
    burgerName: req.body.burger_name
}).then(function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/api/burgers", function(req, res) {
  Burger.burgers.update({
    burgerId: req.body.burger_id
  }).then(function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;
