const express = require('express')

const app = express(); // Install express application 

const path = require('path') // path modules from nodejs

const router = express.Router() // Use Configuration To Use This Method



app.use(express.static('./staticFile'))

router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'))
})


router.get('*', (req, res)=>{
    res.json('Wrong Route :( :(')
})
 

app.use('/', router)


app.listen(5000, () =>{
    console.log('Runinng The Server At Port:', 5000);
}) 