// const Sequelize = require('sequelize');
// require('dotenv').config();

// const sequelize = new Sequelize(process.env.
//     SGPR_DB, process.env.SGPR_USER, process.env.SGPR_PW,
//     {
//         host:'localhost',
//         dialect: 'postgres'
//     }
// )

// module.exports = sequelize;
const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.DB_URL) {
  sequelize = new Sequelize(process.env.DB_URL);
} else {
  sequelize = new Sequelize(
    process.env.SGPR_DB,
    process.env.SGPR_USER,
    process.env.SGPR_PW,
    {
      host: 'localhost',
      dialect: 'postgres'
    }
  );
}

module.exports = sequelize;