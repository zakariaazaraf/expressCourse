const express = require('express')

const app = express(); // Install express application 

const path = require('path') // path modules from nodejs

const router = express.Router() // Use Configuration To Use This Method



app.use(express.static('./staticFile'))

app.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'))
})


app.get('*', (req, res)=>{
    res.json('Wrong Route :( :(')
})
 




app.listen(5000, () =>{
    console.log('Runinng The Server At Port:', 5000);
}) 