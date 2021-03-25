var mysql=require('mysql')

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"your_new_password",
    database:"AWDMAD"
})

con.connect(function(err){
    if(err)throw err
    console.log("connected")

    con.query("select * from teams",function(err,result,field){
        if(err)throw err
        console.log(result)
    })
})