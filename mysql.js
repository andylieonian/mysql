var mysql = require('mysql');
var connection = mysql.createConnction({
    host:'123.57.143.189',
    user:'root',
    password:'zfpx2015',
    database:'zfpx'
});

connection.disconnect();
var name = 'zhangsan';
var sql = "select * from user where name='"+name+"'";
console.log(sql);

connection.query(sql,function(err,rows,field){
    console.log(rows);
});