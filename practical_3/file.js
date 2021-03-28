var fs=require('fs')

fs.readFile('calc.js','utf8',function(err,data){
    console.log(data)
})

fs.writeFile('calc1.js','changed',function(err){
    console.log("data saved")
})

fs.appendFile('calc1.js',' aniruddha',function(err){
    console.log("appended")
})

//fs.unlink('calc1.js',function(err){
//   console.log("deleted")
//})