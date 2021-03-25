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

    con.query("insert into teams values(101,'T8','mahendra',15)",function(err,result,field){
        if(err)throw err
        console.log("row added successfully....")
        console.log(result)
    })
})