const express = require('express');
const app = express();
const fonduesRoutes = require('./routes/fondues');

const port = 8090

app.listen(port, ()=>{
    console.log('coucou je suis express')
})





// Exemple sans fichier routes
app.get('/', (req, res) => {

    res.send('salut  je suis ENCORE ET TOUJOURS la premiere page')
})

app.get('/hello', (req, res) => {
    res.send('hello world')
})

/// avec fichier routes

app.use('/fondues', fonduesRoutes)
