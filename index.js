const express = require('express');
const app = express();
const fonduesRoutes = require('./routes/fondues');

const port = 8090

const mongoose = require('mongoose')
const mongodbUri = "mongodb://127.0.0.1:27017/fondues";

const session = require('express-session')
const mongodbSession = require('connect-mongodb-session')(session)




mongoose.connect(mongodbUri)
    .then(()=>{
        console.log('connecté')
    })
    .catch((err)=>console.log(err))


const store = new mongodbSession({
    uri: mongodbUri,
    collection: 'sessions'
})




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
app.use(express.json()) // deseraliser

app.use('/fondues', fonduesRoutes)
