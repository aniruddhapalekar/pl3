var nodemailer=require('nodemailer');

var transport=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user:'anipalekar15@gmail.com',
        pass:'mail3@123'
    }
});


var mailOptions={
    from:'anipalekar15@gmail.com',
    to:'aniruddhapalekar2000@gmail.com',
    subject:'nodemailer demostration',
    html:`<h1>Hello Sir,</h1><p>my name is aniruddha sanjay palekar. im from patan .this is nodemailer demonstration</p>`
};

transport.sendMail(mailOptions,function(err,info){
    if(err)
        console.log(err)
    else
        console.log("email sent: "+info.response)
});