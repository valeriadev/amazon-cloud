var mysql = require('mysql');

var columns = '*'
var table = 'tweets.tweets'
var where = 'Where'


var con = mysql.createConnection({
    host: "database-1.c2kc2wnjl2xx.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "Password1"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    con.query("Select" + " " + columns + " " + "from" + " " + table , function (err, result) {
        if (err) throw err;
        result._read();
        console.log("Result: " + result);

    });
});