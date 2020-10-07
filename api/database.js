const Sequelize = require('sequelize');

const cls = require('continuation-local-storage');
const namespace = cls.createNamespace('my-namespace');
Sequelize.useCLS(namespace);

const sequelize = new Sequelize('express_db', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',

    pool: {
        max: 10,
        min: 3,
        acquire: 30000,
        idle: 10000
    },

    // sequelize deprecated String based operators are now deprecated. Please use Symbol based operators for better security, read more at http://docs.sequelizejs.com/manual/tutorial/querying.html
    operatorsAliases: 0
});

const models = {
    Book:  sequelize.define(
          'book',
          {
              isbn : {
                  type: Sequelize.STRING,
                  primaryKey: true
              },
              title: Sequelize.STRING,
              price: Sequelize.INTEGER
          },
          {
              freezeTableName: true,
              timestamps: false
          }
    )
};

module.exports = {
    sequelize: sequelize,
    models: models
};