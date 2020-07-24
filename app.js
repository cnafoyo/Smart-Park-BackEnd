const express = require('express');

const mongoose = require('mongoose')

const url = 'mongodb://lincoln:test2020@ds047571.mlab.com:47571/heroku_2khk0xr9'

const app = express();

//connect app with database
mongoose.connect(url, { useNewUrlParser: true })

const con=mongoose.connection

con.on('open',()=>{
    console.log('Connected..')
})

app.use(express.json())

const plateCheckRoutes = require('./routes/checkRegistration');
app.use('/checkRegistration',plateCheckRoutes);

const packinglotRouter=require('./routes/parkingLot')
app.use('/packinglot',packinglotRouter)

const packingspotRouter=require('./routes/parkingSpot')
app.use('/packingspot',packingspotRouter)


module.exports = app;

app.listen(9000, ()=>{
    console.log("Server started");
})

