var http = require('http');
var cadastro = require('./myRegister');
var login = require('./login');
var home = require ('./home');
var consultas = require ('./consultas');

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write("Home: " + home.home() + "<br>");
  res.write("Cadastre-se: " + cadastro.myRegister() + "<br>");
  res.write("Login: " + login.login() + "<br>");
  res.write("Consultas: " + consultas.consultas());
  res.end();
}).listen(5015);
