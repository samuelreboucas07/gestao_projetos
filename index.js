
//Express é a framework utilizado para o Back-End.
const express = require('express');
var multer = require('multer');
const app = express();


//Permite Acesso externo na aplicação
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,x-access-token, Content-Type, Accept");
  next();
});

//Pasta utilizada para o frontEnd vai ser a pasta WWW
app.use('/', express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log('Rodando porta 3000');
});
