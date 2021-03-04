
// Se cargan los modulos necesarios.
var express = require('express');
var path = require('path');
var mysql= require('mysql');
// Crea una Express app.
var app = express();

// obtiene la ruta del directorio publico donde se encuentran los elementos estaticos (css, js).
var publicPath = path.resolve(__dirname, 'Public'); //path.join(__dirname, 'public'); también puede ser una opción

// Para que los archivos estaticos queden disponibles.
app.use(express.static(publicPath));

app.get('/', function(req, res){
  res.sendfile(__dirname + '/Public/index.html');
  });

app.listen(3000);

// Conexion de base de datos.
var conexion = mysql.createConnection({
    host: "wpdatabaseserver.mysql.database.azure.com", 
    user: "adminProject@wpdatabaseserver", 
    password: 'UPMPwebproject_', 
    database: 'webproject', 
    port: 3306,
    
  });
  
    
  conexion.connect(function(error) {
    if (error){
      throw error;
    }else{
      console.log("Conexion Exitosa")
    }
  })

  /*conexion.query('SELECT * from alumno', function(err, results,fields){
  if(err) throw err;

  results.forEach(result=> {
    console.log(result)
  })
})*/