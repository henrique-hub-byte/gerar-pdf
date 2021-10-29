const express = require("express");
const app = express();
var pdf = require("html-pdf"); //recebendo a instancia da html
var ejs = require("ejs");
const bodyParser = require("body-parser");

var nomeDoUsuario = " ";
var curso = " ";
var categoria = " ";


/*var conteudo = `
    <h1 style='color: red'> agora sim ein fihão </h1>
    <hr>
    <p> Esse pdf tem muito conteúdo ein </p>
    <p>Nome: ${nomeDoUsuario} </p>
    <p>curso: ${curso} </p>
    <img src="http://1.bp.blogspot.com/-qdCW3Ppg-js/UYxddqocG5I/AAAAAAAAA18/WbZIxh8I8V0/s1600/Pedreira.jpg"/> 
`*/

app.set('view engine', 'ejs');
app.get("/", (req,res)=>{
    res.render("home");
});

app.post("/gerarpdf", (req,res)=>{
    res.render("home");
});


ejs.renderFile("./meuarquivo.ejs", {nome: nomeDoUsuario, curso: curso, categoria: categoria},(err,html) => {
    if(err){
        console.log("erro!")
    }else{
        pdf.create(html,{}).toFile("./meupdflindao.pdf",(err, res) => {
            if(err){ 
                console.log("um erro aconteceu (" );
            }else{
                console.log(res)
            }
        })// onde eu vou gerar
    }
});

app.listen(8001,()=>{
    console.log("rodou chefe na porta 8001 e tebo");
})
 


