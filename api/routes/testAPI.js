
var express = require("express");
var router = express.Router();

var c = 5
var d = 7

router.get("/", function(req, res, next) {
    res.send((c*d).toString());
});

module.exports = router;

