
var express = require('express');

var app = express();


app.use(express.static('public'));

app.listen(3007, function() {
console.log("in the year 3007");
});
