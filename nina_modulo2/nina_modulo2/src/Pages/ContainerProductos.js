import Productos from "../Components/Productos"
function CointainaerProductos(){
  
    return(
        <>
              
              <div className=" container text-center">
                <div className=" App-home row">
                 
                    <div className="bg-glass col align-self-center">

                        <Productos />
                    </div>
                  
                  </div>
                
              </div>
        </>
    )
}

export default CointainaerProductos