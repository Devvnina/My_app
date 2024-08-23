import React, {useState,useEffect} from "react"
import Producto from "./Producto"

function Productos(){

  const titulo = "Listado de productos"
  const [productos,setProductos] = useState([])
  const [isLoading,setIsloading] = useState(true)

 useEffect(
      () => {
         
        functiongeneral();
      }, 
      []
  ); 
  

  const filtrar = ()=>{
    setProductos([{
      empno:3,
      ename:"iPhone",
      sal:2000,
      hiredate:"Celulares" 
    }])
 }
 const actualizar = ()=>{
  functiongeneral();
}
const functiongeneral=()=>{

  setIsloading(true);
  fetch("https://apex.oracle.com/pls/apex/vnn/hr/empinfo/")
  //getAll()
  .then(res=> res.json())
  .then(
    (result)=> {
      //console.log(result.items)
      setTimeout(()=>{
        setProductos(result.items)
          setIsloading(false)
        },2000)              
      
    },
    (error)=>{
      console.error(error);
      alert("Ocurrio un error inesperado!");
    /***/
    }
  )
} 

 if(isLoading){
    return(
      <div>
        Cargando...
      </div>
    )
 }else{
    return (
      <div> 
        <div>{titulo}</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">+</th>
            </tr>
          </thead>
          <tbody>
                {productos.map(producto =>   <Producto id={producto.empno} price={producto.sal} category={producto.ename} /> )}

              
          </tbody>
          <tfoot>
            
              <button type="button" className="btn btn-primary" onClick={filtrar}>Filtrar</button>
              <button type="button" className="btn btn-secondary" onClick={actualizar}>Actualizar</button>
            
            
          </tfoot>
      </table>
      </div>
    )
 }   

}

export default Productos
