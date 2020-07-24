const express = require('express');

const mongoose = require('mongoose')

const url = 'mongodb://smartpark:test2020@ds155461.mlab.com:55461/heroku_qjr222tc'

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

