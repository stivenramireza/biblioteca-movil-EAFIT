var https = require('https');
var express = require('express');
var bodyParser = require('body-parser');
var db = require('mongoose');
var methodOverride = require ('method-override');
var app = express();

// Conexión a la base de datos - MongoDB
db.connect("mongodb://biblioteca:bibliotecamovil7@ds149495.mlab.com:49495/biblioteca-movil", function(err, res){
  if (err) { 
    console.log (err);
  } else {
    console.log ('Connected to Database');
  }
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

// Importar modelos y controladores
var models = require('./models/book')(app, db);
var Book = require('./controllers/books');

var router = express.Router();
// Index - Route
app.get('/', function(req, res) { 
 res.send("Biblioteca Móvil EAFIT - Proyecto Integrador 1 (El Mago)");
});

app.use(router);

// API routes

var api = express.Router();

api.route('/books')
  .get(Book.findAll)
  .post(Book.add)

api.route('/books/:id')
  .get(Book.findById)
  .put(Book.update)
  .delete(Book.delete)

app.use('/eafit', api);

// Start server
app.listen(process.env.PORT, function() {
    console.log('Node app is running on port',process.env.PORT);
  });