import React,{useEffect} from "react"
import ButtonsClass from "./ButtonsClass"
function Producto({
  id,
  category,
  price
}){
 
   
  useEffect(
    ()=>{
     // console.log("Se modifico title",id)
    },
    [id]
  )

  return (
      <>
      <tr key={id}>
       <th scope="row">{id}</th>
        <td>{category}</td>
        <td>{price}</td>
        <td>
        <ButtonsClass link={'/detalleForm'} typ='button' clas= "btn btn-outline-info"  titu="Ver Detalle" accion= "aceptar" message="Gracias por su compra!"></ButtonsClass>
       
          </td>
      </tr>
      </>
  )
}

export default Producto
