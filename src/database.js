const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mean-empleados')
.then(db=>console.log('La base de datos esta en linea'))
.catch((err)=>console.log(err));