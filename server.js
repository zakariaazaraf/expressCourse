const express = require('express')

const app = express(); // Install express application 

// Handel The Router

app.get('/', (req, res) =>{
    res.json('Is Works !!!')
})

app.get('/zakaria', (request, response) =>{
    response.json('You\'re In Zakaria Route')
})

app.listen(5000, () =>{
    console.log('Runinng The Server At Port:', 5000);
})