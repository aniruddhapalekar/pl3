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

    con.query("create table teams(team_id int,team_name varchar(255),team_lead varchar(255),team_count int)",function(err,result,field){
        if(err)throw err
        console.log("table created....")
        console.log(result)
    })
})