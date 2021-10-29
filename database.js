const Sequelize = require("sequelize");

const connection = new Sequelize('database', 'root', 
   /* '!Wq2AXzs' */ 'Anfield_893'  
    ,{
    server: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;
