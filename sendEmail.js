const http = require('http')

const nodemailer = require('nodemailer')


// START FORM THE MAILER
    

http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type' : 'text/html'})

    const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'zakariabenaais@gmail.com',
        pass: 'ziko1997rf'
    }
    });

    const mailOptions = {
    from: 'zakariabenaais@gmail.com',
    to: 'zakariabensalek@gmail.com, zakariabenaais@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log("Error " + error);
    } else {
        console.log('Email sent: ' + info.response);
            res.write("myInfo" + info)
            res.end()
    }

    res.write("myInfo")
    res.end()
    });



    

}).listen(3000)