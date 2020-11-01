const Factory = require('../factory').FACTORY_HOOK;



const QueryString = {
  createTable: tablename => {
   `CREATE TABLE IF NOT EXISTS ${tablename} (
      id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
      title VARCHAR(100) NOT NULL,
      description TEXT NOT NULL)`
   },

  selectAllTable: tablename => {
    return `SELECT * from ${tablename}`;
  },

  insertItem: tablename => {
    return `INSERT INTO ${tablename} SET ?`
  },

  getItemById: tablename => {
    return `select * from ${tablename} WHERE id = ?`;
  },

  updateItemById: tablename => {
    return `UPDATE ${tablename} SET ? WHERE id = ?`;
  },

  deleteItem: tablename => {
    return `DELETE FROM ${tablename} WHERE id = ?`;
  },


};
