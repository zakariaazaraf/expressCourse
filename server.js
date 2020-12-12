const express = require('express')

const app = express(); // Install express application 

const path = require('path') // path modules from nodejs

const router = express.Router() // Use Configuration To Use This Method

const bodyParser = require('body-parser') // 



app.use(express.static('./staticFile'))
app.use(bodyParser()) // Config body-parser package


router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'))
})


router.get('*', (req, res)=>{
    res.json('Wrong Route :( :(')
})
 
// To Get Data Properly Use body-parser which destruct the data and return the object
router.post('/user', (req, res) =>{ 
    // Get The Data Posted By The Clinet
    console.log(req.body)

    res.json({mes: ''})
})

app.use('/', router) // router Configuration


app.listen(5000, () =>{
    console.log('Runinng The Server At Port:', 5000);
}) 