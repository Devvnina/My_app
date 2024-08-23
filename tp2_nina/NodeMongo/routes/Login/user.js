/*var express = require('express');
var router = express.Router();

const usuarioLogueado = [
  {id:1,nombre:"Maria", apellido: "ibarola", edad:"23",
    permisos:["director", "alumno","cliente"],
    estado: "activo",
    direccion:{calle:"Av.corrientes", numero:"3333", piso:"PB A"},
    pendientes:"no"
    }
];
/* GET users listing. */
/*router.get('/', function(req, res, next) {
  res.json(usuarioLogueado)
  
});
router.get('/permisos', function(req, res, next) {
    
  let usuario = usuarioLogueado.permisos;
  res.json(usuario)
});
router.post('/direccion', function(req, res, next) {

   res.json(usuarioLogueado.direccion)
});

module.exports = router;
*/
var express = require('express');
var router = express.Router();
const usersController = require("../../controllers/userController")

/* GET users listing. */
//Leer todos
router.get('/', usersController.getAll);
//Crear
router.post('/', usersController.create);

router.post('/login', usersController.validate);

module.exports = router;
