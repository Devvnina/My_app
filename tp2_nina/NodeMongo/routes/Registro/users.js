var express = require('express');
var router = express.Router();

const usuarios = [
  {id:1,nombre:"Maria", apellido: "ibarola", edad:"23"},
  {id:2,nombre:"Jose", apellido: "Gonzales", edad:"33"},
  {id:3,nombre:"Jona", apellido: "Argento", edad:"29"},
  {id:4,nombre:"Marcos", apellido: "Argento", edad:"31"},
  {id:5,nombre:"Pepe", apellido: "Gonzales", edad:"30"},
];
/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.json(usuarios)
 
});
router.get('/:nombre', function(req, res, next) {

  let usuario = usuarios.filter(x=> x.nombre == req.params.nombre);
  
  res.json(usuario)
});
router.post('/', function(req, res, next) {
  res.send('respond with a resource post');
});

module.exports = router;
