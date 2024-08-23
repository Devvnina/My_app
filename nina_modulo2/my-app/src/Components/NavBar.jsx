import { forwardRef } from 'react';
import { Link, } from 'react-router-dom';

export function NavBar(props,ref){
   console.log(ref);
   console.log(props);
    return(
      
       
            <div className="App-navbar">

               
                <nav className="navbar navbar-expand-lg navbar-light ">
               
                    <div className="container-fluid">
                    
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        
                    
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                            <i className="fas fa-shopping-cart">Home</i>
                            </Link>
                        
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/productos">
                        <i className="fas fa-shopping-cart">Productos</i>
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/registroProducto">
                        <i className="fas fa-shopping-cart">Agregar</i>
                        </Link>
                        </li>
                        </ul>
                    
                    </div>

                    <div className="d-flex align-items-center">

                    <Link className="nav-link" to="/Login">
                        <i className="fas fa-shopping-cart">Login</i>
                    </Link>

                         
                      
                        
                    </div>

                    </div>
             
                </nav>
                <div>{ref}</div>
            </div>
          
    
        
    );
}
export default forwardRef(NavBar)

