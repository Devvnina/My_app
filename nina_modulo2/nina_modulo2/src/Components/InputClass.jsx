import React, {Component} from "react"; 
import ValidClass from "./ValidClass";
class InputClass extends Component{

    render(){
      
        return(
            <>
                <div className="col-md-9">
                    <label className="form-label">{this.props.title}</label>
                    <input onChange={this.props.onChange} type={this.props.type_input} className="form-control" id={this.props.name_for} placeholder={this.props.placeholder} value={this.props.value_input}/>
                    <ValidClass type_valid= "valid-feedback" text_valid={this.props.text_valid} />
                </div>
            </>
          
        )
    }
}
export default InputClass
