

// #############   CRUD with Mysql ###########################33
const express = require("express");
var bodyParser = require('body-parser')
const conn = require('./connection');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static('public'));

// // GET the data ..........................

app.get('/', (req, res) => {
    const connection = conn()
    connection.query("select * from tomorrow", (err, result) => {
        if (err) throw err;
        console.log('Getting the  data from employee table are: \n', result);
        res.send(dataResponse(result));
        connection.end();
    })
})
// // POST  the data .....
app.post('/', function (req, res) {
    const connection = conn()
    console.log(req.body.id);
    console.log(req.body.Name);
    
    var sqlQuery = "INSERT INTO `tomorrow`(`id`,`Name`) VALUES ('" + req.body.id + "','" + req.body.Name + "')";
    connection.query(sqlQuery, function (err, result) {
        if (err) throw err;
        res.send(dataResponse(result));
        connection.end();
    });
})

// // UPDATE THE DATA...................
app.put('/:id', (req, res) => {
    const connection = conn()
    let sqlQuery = "UPDATE employee SET fullName='" + req.body.fullName + "', emailId='" + req.body.emailId + "',phone_no='" + req.body.phone_no + "',Address='" + req.body.Address + "' WHERE id=" + req.params.id;
    connection.query(sqlQuery, function (err, result) {
        if (err) throw err;

        res.send(dataResponse(result));
        connection.end();
    });
})

// // DELETE THE DATA................

app.delete('/:id', (req, res) => {
    const connection = conn()
    let sqlQuery = "DELETE FROM tomorrow WHERE id=" + req.params.id + "";
    connection.query(sqlQuery, function (err, result) {
        if (err) throw err;
        res.send(dataResponse(result));
        connection.end();
    });
})

function dataResponse(result) {
    return JSON.stringify({ "status": 200, "error": null, "response": result });
}
app.listen(3000, () => {
    console.log("server is running at 3000....")
})