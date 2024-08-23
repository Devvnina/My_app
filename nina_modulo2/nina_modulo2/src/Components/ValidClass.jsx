import React, {Component} from "react"; 

class ValidClass extends Component{
    render(){
        return(
            <div className={this.props.type_valid}>
                {this.props.text_valid}
            </div>
          
        )
    }
}
export default ValidClass