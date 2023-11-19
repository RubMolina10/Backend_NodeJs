require('./database.js');
const app = require('./app');

app.listen(app.get('port'));
//console.log('Servidor en linea',app.get('port')); 

console.log('SERVIDOR EN LINEA'); 