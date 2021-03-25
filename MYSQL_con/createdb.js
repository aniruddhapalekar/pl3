var mysql=require('mysql')

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"your_new_password",
    
})


con.connect(function(err){
    if(err)throw err
    console.log("connected")

    con.query("create database AWDMAD",function(err,result,field){
        if(err)throw err
        console.log("database created....")
        console.log(result)
    })
})