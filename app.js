var createError = require('http-errors');
var express = require('express');
var path = require('path');



var rotas = require('./routes/rotas');
const porta = process.env.PORT || 80;
var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', rotas);


app.listen(28512,()=> {
  console.log("Servidor execuranto na porta 28512!")
});




module.exports = app;
