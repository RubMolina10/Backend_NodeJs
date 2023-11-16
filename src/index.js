const app = require('./app');

app.listen(app.get('port'));
console.log('Servidor en linea',app.get('port'));