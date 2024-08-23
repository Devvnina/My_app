import {Perimetro} from './../libs/perimetro';
import {Superficie} from './../libs/superficie';
import {Productos} from './../libs/productos';
let perimetro:Perimetro = new Perimetro();
let superficie:Superficie = new Superficie();
import { Router } from 'express';
  
export const router = Router();


   
router.get("/geo", (req, res, next)=>{
        res.json([{
            "Tipo de operación": "Perimetro",
            "data":{
                "Caudrado": perimetro.cuadrado(3),
                "Rectangulo": perimetro.rectangulo(2, 4),
                "Circulo": perimetro.circulo(8),
            }
        },{
            "Tipo de operación": "Superficie",
            "data":{
                "Caudrado": superficie.cuadrado(3),
                "Rectangulo": superficie.rectangulo(2, 4),
                "Circulo": superficie.circulo(8),
            }
        }])
    });
    
    router.get("/:operacion/:figura", (req, res, next)=>{
        let {operacion, figura} = req.params;
        let op_clase;
        if(operacion == "perimetro"){
            op_clase = perimetro;
        }else{
            op_clase = superficie;
        }
        let resultado = false;
    
        switch (figura) {
            case "cuadrado":
                resultado = op_clase.cuadrado(3);
                break;
            case "rectangulo":
                resultado = op_clase.rectangulo(2, 4);
                break;
            case "circulo":
                resultado = op_clase.circulo(8);
                break;
        }
        res.json({"Tipo de opgggggggeración": operacion, "Figgggura": figura, "Regggsultado": resultado});
    });
   
router.get('/');

/*router.get('/:id', getUser);

router.put('/:id', updateUser);

router.post('/', createUser);

router.delete('/:id', deleteUser);*/
 
