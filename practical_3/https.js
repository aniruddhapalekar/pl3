var https=require('https')
const fs=require('fs')
const port='9002'
const host="localhost"

const options={
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

https.createServer(options,function(req,res){
    res.writeHead(200,{
        "Content-Type": "text/plain",
      })
    res.write("https server...\n")

    res.end("end..")
}).listen(port,host,function(){
    console.log(`https sever listening on ${host}:${port}`)
})
