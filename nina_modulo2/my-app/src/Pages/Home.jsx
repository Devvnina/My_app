import React from 'react';
import {useForm} from "react-hook-form";
import InputClass from '../Components/InputClass';
import ButtonsClass from "../Components/ButtonsClass";
function Home(){
    const {register, handleSubmit, formState:{error}}=useForm();
    const onSubmit = data => console.log(data);
    console.log("no logre resolver esto");
    return(
        <>
              
            <div className='App-home'>
                <div className="container text-center">
                    <div className="row" >
                        <div className="col-sm-5 col-md-6 inner">
                            <form onSubmit={handleSubmit(onSubmit)}>
                            
                                <h2 >Formulario de registro</h2>
                                <div className="form-group">
                                <div className="form-wrapper label-fomBlack">
                                <InputClass name_for="nombre"  title="Nombre" type_input="text" placeholder="nombre" text_valid="Este campo es necesario" {...register("nombre")}/>
                                </div>
                                <div className="form-wrapper label-fomBlack">
                                <InputClass name_for="apellido"  title="Apellido" type_input="text" placeholder="Apellido" text_valid="Este campo es necesario"/>
                               
                                </div>
                                </div>
                                <div className="form-wrapper label-fomBlack">
                                <InputClass name_for="email"  title="Email" type_input="email" placeholder="email" text_valid="Verifique el email"/>
                                </div>
                                <div className="form-wrapper label-fomBlack">
                                <InputClass name_for="password"  title="Password" type_input="password" placeholder="Password" text_valid="Campo necesario, ingrese un valor valido"/>
                  
                                </div>
                                <div className="form-wrapper label-fomBlack">
                                <InputClass name_for="password"  title="Confirme paswword" type_input="password" placeholder="Password" text_valid="Campo necesario, ingrese un valor valido"/>
                  
                                </div>
                                <div className="checkbox label-fomBlack-term">
                                <label>
                                <input type="checkbox"/> Aceptar politicas de uso &amp; Privacy Policy.
                                <span className="checkmark"></span>
                                </label>
                                </div>
                                <ButtonsClass typ='submit' clas= "btn btn-primary"  titu="Aceptar" accion= "aceptar" message="Su resgistro fue exitoso!"></ButtonsClass>
                                                  
                            </form>
                        </div>
                        <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
                        <div className='label-fomBlack'>
                            <h2>Nosotros</h2>
                            <p>
                                <strong>Lorem Ipsum</strong> 
                                is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            
                            
                            
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Home