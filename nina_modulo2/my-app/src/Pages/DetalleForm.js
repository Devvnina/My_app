import CardClass from "../Components/CardClass"
import React, {useState,useEffect} from "react"
import { getAllProductos } from "../Services/productos"
function DetalleForm(){
  const [productos,setProductos] = useState([])

  useEffect(
    ()=>{
      const result = async ()=>{
        try{
          const responseData = await getAllProductos()
          console.log(responseData.data)
          setProductos(responseData.data.results)
       
        }catch(e){
          console.log(e)
        }
       
      }
      result()
    },
    []
  )
    
    return(

<div className="container my-5">
  

    <div className="card red py-2" id="intro">

     
      <div className="card-body">

              Detalles

      </div>
    
    </div>


  <hr className="my-5"/>

  <div id="multi-item-example" className="carousel slide carousel-dark carousel-multi-item" data-ride="carousel">
   
  
    <div className="carousel-inner" role="listbox">

      <div className="carousel-item active">

        <div className="row">
        {productos.map(producto =>   <CardClass title={producto.title} desc={producto.price + "  -  " + producto.category} butonName="Comprar" altName="Nambrede foto" srcName="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg"></CardClass>
)}
        </div>
      </div>  
     
        
    </div>
 
  </div>
  
</div>
 )
} 
export default DetalleForm