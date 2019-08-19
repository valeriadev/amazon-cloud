const mysql = require('mysql');
const express = require('express');
const url = require('url');

const app = express();
const port = 80;


let columns = '*';
let table = 'tweets.tweets';


let connection = mysql.createConnection({
    host: "database-1.c2kc2wnjl2xx.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "admin",
    password: "Password1"
});


app.get('/', async function (req, res) {
    let url_parts = url.parse(req.url, true);
    let query = url_parts.query;
    params = "";
    if (query.id) {
        params = "WHERE id=" + query.id.toString();
    } else if (query.link) {
        params = "WHERE link=" + query.link.toString();
    } else if (query.title) {
        params = "WHERE title=" + query.title.toString();
    } else if (query.gist) {
        params = "WHERE gist=" + query.gist.toString();
    } else if (query.screenshot_url) {
        params = "WHERE screenshot_url=" + query.screenshot_url.toString();
    } else if (query.timestamp) {
        params = "WHERE timestamp=" + query.timestamp.toString();
    }

    connection.query("Select" + " " + columns + " " + "from" + " " + table + " " + params, function (err, result) {
        if (err) throw err;
        let twitts = [];
        for (let val of result)
            twitts.push(val);
        res.send({results: twitts});
    })
});
app.listen(port);



