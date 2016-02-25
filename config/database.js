// var Bookshelf = require('bookshelf');

// var mysql = require('mysql');
//
// var connection = mysql.createConnection({
// 				  host     : 'localhost',
//           port: 8889,
// 				  user     : 'root',
// 				  password : 'root'
// 				});
//
// connection.connect();
//
//
// var DB = Bookshelf.initialize({
//    client: 'mysql',
//    connection: config
// });
//
// module.exports.DB = DB;


// var Bookshelf = require('bookshelf');
//
// var config = {
//   host     : 'localhost',
//   port: 8889,
//   user     : 'root',
//   password : 'root'
// };
//
// var DB = Bookshelf.initialize({
//    client: 'passportSqlTest ',
//    connection: config
// });
//
// module.exports.DB = DB;


module.exports = {
    'connection': {
        'host': 'localhost',
        'port': 8889,
        'user': 'root',
        'password': 'root'
    },
	  'database': 'passportSqlTest',
    'user_table': 'user'
};
