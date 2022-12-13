const { Sequelize,Op } = require('sequelize');
const modelRaza =require('./models/Raza.js')
const modelTemperamento=require('./models/Temperamento.js')

const sequelize =new Sequelize('postgres://pmxtazmj:9PStqIWDNIYa9NNpxgU1AvHqcP33rx_L@mahmud.db.elephantsql.com/pmxtazmj',{
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
})
modelRaza(sequelize);
modelTemperamento(sequelize);

const { Raza,Temperamento } = sequelize.models;

Raza.belongsToMany(Temperamento,{ through:'Raza_Temperamento'})
Temperamento.belongsToMany(Raza,{ through:'Raza_Temperamento'})


module.exports = {
    ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
    conn: sequelize,
    Op     // para importart la conexión { conn } = require('./db.js');
  };
  