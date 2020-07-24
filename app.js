const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const url = 'mongodb://smartpark:test2020@ds155461.mlab.com:55461/heroku_qjr222tc'

const app = express();

//connect app with database
mongoose.connect(url, { useNewUrlParser: true })

const con=mongoose.connection

con.on('open',()=>{
    console.log('Connected..')
})

app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Ccontrol-Allow-Origin', '*');
  res.header('Access-Ccontrol-Allow-Header', 'Origin, X-Request-With, Content-Type, Accept, Authorization');
  if(req.method === 'OPOTIONS'){
    res.header('Access-Ccontrol-Allow-Methods', 'PUT, POST, PATCH, GET, DELETE');
    return res.status(200).json({});
  }
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const plateCheckRoutes = require('./routes/checkRegistration');
app.use('/checkRegistration',plateCheckRoutes);

const packinglotRouter=require('./routes/parkingLot')
app.use('/packinglot',packinglotRouter)

const packingspotRouter=require('./routes/parkingSpot')
app.use('/packingspot',packingspotRouter)


module.exports = app;

/*
app.listen(3045, ()=>{
    console.log("Server started");
})
*/
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
