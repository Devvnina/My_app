export class Productos {
 
    
    nameProductos(nameproductos:string) {
        return nameproductos;
    }
    priceProductos(priceproductos:string) {
        return priceproductos;
    }
    linkProductos(linkproductos:string) {
        return linkproductos;
    }
    get = (req, res) => {
        return res.json([{
            "nameproductos": "Producto 1",
            "priceproductos": "100",
            "linkproductos": "http://www.google.com"
        },{
            "nameproductos": "Producto 2",
            "priceproductos": "200",
            "linkproductos": "http://www.google.com"
        },{
            "nameproductos": "Producto 3",
            "priceproductos": "300",
            "linkproductos": "http://www.google.com"
        }])
    }
    set = (req, res) => {
        return "es un set";  
    }
   /* post = (req, res) => {
        return "";  
    }*/
  
}






