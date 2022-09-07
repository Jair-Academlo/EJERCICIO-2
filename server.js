require('colors');
const { app } = require('./app');
const { db } = require('./utils/database');

db.authenticate()
  .then(() => console.log('datos autenticados'.magenta))
  .catch(error => console.log(error));

db.sync()
  .then(() => console.log('datos sincronizados'.magenta))
  .catch(error => console.log(error));

const PORT = 4100;

app.listen(PORT, () => {
  console.log(`el servidor se esta ejecutando en el puerto ${PORT}`.cyan);
});
