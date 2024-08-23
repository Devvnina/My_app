var express = require('express');
var router = express.Router();

/* GET users listing. */
//Leer todos
const productos = [
  {id:1,nombre:"moto g", precio: "$1000"},
  {id:2,nombre:"moto z", precio: "$2000"},
  {id:3,nombre:"iphone", precio: "$3000"},
];

router.get('/', function(req, res, next) {
  ///console.log(req.query)
  
  res.json(productos)
});
//Leer por id
router.get('/:id', function(req, res, next) {
  //console.log(req.params, req.params.id)
  
  let producto = productos.filter(x=> x.id == req.params.id);
  res.json(producto)
});
//Crear
router.post('/', function(req, res, next) {
  console.log(req.body)
  res.json(req.body)
});
//actualizar
router.put('/:id', function(req, res, next) {
  //console.log(req.params, req.params.id)
 
  console.log(req.body)
  res.json(req.body)
});
//eliminar
router.delete('/:id', function(req, res, next) {
 // console.log(req.params, req.params.id)

 productos.pop(x.id == req.params.id);
  res.json({status:"ok"})
});

module.exports = router;
