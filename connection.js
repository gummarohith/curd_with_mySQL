const mysql=require('mysql')
const con= ()=> {
    const conneciton = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'today'
    });
    
    conneciton.connect((err)=>{
        if(err) throw err;
        console.log("Connection established....")
    })

    return conneciton;
}

module.exports= con;