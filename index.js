const http = require('http');
const cadastro = require('./myRegister');
const login = require('./login');
const home = require('./home');
const consultas = require('./consultas');

http.createServer((req, res) => {
  res.writeHead(200, { 
    'Content-Type': 'text/html',
    'font-family': 'Arial, sans-serif',
    'background-color': '#f0f0f0',
    'color': '#333',
    'padding': '10px',
  });

  res.write(`<h1>Home:</h1>${home.home()}<br>`);
  res.write(`<h1>Cadastre-se:</h1>${cadastro.myRegister()}<br>`);
  res.write(`<h1>Login:</h1>${login.login()}<br>`);
  res.write(`<h1>Consultas:</h1>${consultas.consultas()}`);
  res.end();
}).listen(5015);
