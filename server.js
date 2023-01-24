var http = require('http')
var fs   = require ('fs')
var randompass = require('generate-password');
var nodemailer = require('nodemailer');



const server= http.createServer( (req, res)=> {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(  '<h1>Hello Node!!!!</h1>\n' )
  res.end();
})
server.listen(3000,()=>{'server is running '});

fs.writeFile('welcom.txt', 'Hello Node', (err)=> {
    if (err) throw err;
    console.log('saved!');
  });
  fs.readFile('hello.txt','UTF-8', (err, data)=> {
if (err) throw err
  console.log(data)
  });
  

  var password = randompass.generate({
	length: 10,
	numbers: true,
    uppercase: true,
    symbols:true,
    lowercase:true,

});

console.log(password);


var mailtransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'mostafahp44@gmail.com',
      pass: '12344'
    }
  });
  
  var mailOptions = {
    from: 'mostafahp44@gmail.com',
    to: 'mostafaamine202122832@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };
  
  mailtransport.sendMail(mailOptions, (error, info)=>{
    if (error)
    throw error
     else
      {
      console.log('Email sent: ' + info.response);
    }
  });
  
