var mysql = require("mysql");
var req = require("request");
var cons = require("./constants");
var crypto = require('crypto');
var pool = mysql.createPool({
        host:cons.host,
        user:cons.user,
        password:cons.password,
        database:cons.database
    });
