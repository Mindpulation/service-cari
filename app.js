const express = require('express');
const app = express();
const bp = require('body-parser');
const mongoose = require('mongoose');
const cariRoutes = require('./API/routes/cari');

app.use(bp.json());
mongoose.connect('mongodb://indo1:2ad68fdaa8a4207a35ec22ba7beb34cd2425b247@mongo-indo1:27017/CariDB', { useNewUrlParser: true, useUnifiedTopology: true });
app.use('/cari', cariRoutes);

module.exports = app;
