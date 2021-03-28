var calc=require('./calc.js')
var http=require('http')

const port='9001'
const host="localhost"

const httpserver=http.createServer(function(req,res){
    res.writeHead(200,{
        "Content-Type": "text/plain",
      })

    res.write("addition is: "+calc.add(4,5)+"\n")
    res.write("substraction is: "+calc.sub(19,8)+"\n")
    res.write("2 power 5 is: "+calc.pow(2,5)+"\n")

    res.end('dnne')
}).listen(port,host,function(){
    console.log(`sever listening on ${host}:${port}`)
})

