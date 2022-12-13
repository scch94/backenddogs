const server =require('./src/app.js');
const {conn}=require('./src/db.js')


conn.sync({ force: true }).then(() => {
    console.log("conectado a base de datos")
    server.listen(3001, () => {
      console.log('listening at port: 3001'); // eslint-disable-line no-console
    });
  });