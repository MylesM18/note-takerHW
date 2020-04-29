var mysql  = require('mysql');
var util = require('util')

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Myles123',
  database : 'notes_db'
});

connection.connect();
connection.query = util.promisify(connection.query);

module.exports = connection;