

import InputClass from "../Components/InputClass";
import ButtonsClass from "../Components/ButtonsClass";
function Login(){
   
    let stylesBtnFb = { background: "#3b5998" };
    let stylesBtnTw = { background: "#55acee" };
    const handleSubmit =(e)=>{
       
        e.preventDefault();
       
      }
    return(
        <>
          
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                    <div className="col-md-8 col-lg-7 col-xl-6">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                        className="img-fluid" aria-hidden alt="Phone image"/> 
                    </div>
                    <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <form  onSubmit={handleSubmit}>
                      
                        <div className="form-outline mb-4">
                            <InputClass name_for="form1Example13"  title="Email" type_input="Email" placeholder="Email" text_valid="Este campo es necesario"/>
                                            
                        </div>
                    
                        <div className="form-outline mb-4">
                            <InputClass name_for="form1Example23"  title="Password" type_input="password" placeholder="Password" text_valid="Este campo es necesario"/>
                           
                        </div>

                        <div className="d-flex justify-content-around align-items-center mb-4">
                          
                            <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="form1Example3" checked />
                            <label className="form-check-label" for="form1Example3"> Remember me </label>
                            </div>
                            <a href="#!">Forgot password?</a>
                        </div>
                        <ButtonsClass link={'/'} typ='submit' clas= "btn btn-primary"  titu="Sign in" accion = "submit" message="Ya estas adentro!"></ButtonsClass>
                      
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                        </div>

                        <a className="btn btn-primary btn-lg btn-block" style={stylesBtnFb} href="#!"
                            role="button">
                            <i className="fab fa-facebook-f">F</i>
                        </a>
                        <a className="btn btn-primary btn-lg btn-block" style={stylesBtnTw} href="#!"
                            role="button">
                            <i className="fab fa-twitter">T</i></a>

                        </form>
                    </div>
                    </div>
                </div>
            </section>

        </>
    )

}

export default Login