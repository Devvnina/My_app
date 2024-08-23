
import EssayForm from './form';
import React,{Component} from 'react';
class AppsContainer extends Component{
    constructor(props){
        super(props);
        this.state={
            temas:['Carga','Eliminar','Buscar']
        };
    }
    
    render(){
        //const items=this.state.temas.map(t=>(<Item valor={t}/>));
        return(
            <div >
             
                <EssayForm name='form'/>
            </div>
        )
    }
}
export default AppsContainer;
