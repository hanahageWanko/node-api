const Sequelize = require('sequelize');
const cls = require('continuation-local-storage');
const namespace = cls.createNamespace('my-namespace');
Sequelize.useCLS(namespace);

const sequelize = new Sequelize('Todo','root','', {
  host : 'localhost',
  dialect: 'mysql',

    pool:{
      max: 10,
      min: 3,
      acquire: 30000,
      idle: 10000
  },

  operationsAliases: false
});

const models = {
  Task: sequelize.define(
    'task',
    {
      name : Sequelize.STRING,
      discription : Sequelize.STRING,
    },
    {
      freezeTableName : true,
      timestamps: false
    }
  )
}

module.exports = {
  sequelize: sequelize,
  models: models
}

