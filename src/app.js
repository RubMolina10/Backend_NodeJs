const express =require('express');
const morgan = require('morgan');

const app=express();

//Variables de entorno
app.set('port',process.env.PORT || 4000);

app.use(morgan('dev'));

app.use(require('./routes/employes.routes'));
module.exports =app;