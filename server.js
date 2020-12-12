const express = require('express')

const app = express(); // Install express application 

const router = express.Router() // Use Configuration To Use This Method

// Handel The Router

// ============= First Methos ================

/* app.get('/', (req, res) =>{
    res.json('Is Works !!!')
})

app.get('/zakaria', (request, response) =>{
    response.json('You\'re In Zakaria Route')
})

app.get('/azaraf', (req, res)=>{
    res.json('You\'re In azaraf Profile !!')
})

app.get('*', (req, res)=>{
    res.json('Wrong Route :( :(')
})
 */


// ============== Second Methos ====================

 app.get('/', (req, res) =>{
    res.json('Is Works !!!')
})

router.get('/zakaria', (request, response) =>{
    response.json('You\'re In Zakaria Route')
})

router.get('/azaraf', (req, res)=>{
    res.json('You\'re In azaraf Profile !!')
})

router.get('*', (req, res)=>{
    res.json('Wrong Route :( :(')
})

app.use('/', router);

app.listen(5000, () =>{
    console.log('Runinng The Server At Port:', 5000);
}) 