const Sequelize = require("sequelize"); 
const connection = require("./database");
const Model = require("./database/model");
const connection = require("")
const Model = connection.define('model',{
    nomeDoUsuario:{
        type: Sequelize.STRING,
        allowNull: false
    },
    curso:{       
        type: Sequelize.STRING,
        allowNull: false

    },
    categoria: {
        type: Sequelize.STRING
    },
})

model.sync({force:false}).then(()=>{
    console.log("Tabela model criado com sucesso");
}).catch(error =>{
    console.log(error);
})

module.exports = Model;