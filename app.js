const express = require('express');
const app = express();
const bp = require('body-parser');
const mongoose = require('mongoose');
const cariRoutes = require('./API/routes/cari');

app.use(bp.json());
let connect = mongoose.connect('mongodb://mongo-indo1:27017/CariDB', { useNewUrlParser: true, useUnifiedTopology: true });
if(connect){
	console.log("Sukses Konek DB")
} else {
	console.log("Error")
}
app.use('/cari', cariRoutes);

module.exports = app;
