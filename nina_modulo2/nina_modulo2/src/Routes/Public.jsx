import Home from "../Pages/Home";
import ContainerClass from "../Pages/ContainerClass";
import Login from "../Pages/Login";
import CointainaerProductos from "../Pages/ContainerProductos";
import DetalleForm from "../Pages/DetalleForm";
import { Route, Routes } from 'react-router-dom';
function Public(){
    return (
       
              <Routes>
                <Route path="/" element={<Home />}/>  
                <Route path="/:user" element={<Home />}/>                    
                <Route path="/login" element={<Login />}/>
                <Route path="/productos" element={<CointainaerProductos />}/>           
                <Route path="/registroProducto" element={<ContainerClass />}/>
                <Route path="/detalleForm" element={<DetalleForm />}/>
                <Route path="*" element={<Login/>}/>
            </Routes>
      
    )
}
export default Public