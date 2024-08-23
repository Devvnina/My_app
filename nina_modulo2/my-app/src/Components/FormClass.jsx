import { useState } from "react";
import InputClass from "./InputClass";
import ButtonsClass from "../Components/ButtonsClass";
export default function FormClass(){

   const [title, setTitle]=useState(""); 
   const [author, setAuthor]=useState("");
   const [cover, setCover]=useState("");
   const [intro, setIntro]=useState("");
   
  function handleChange(e){
    console.log("hola handleChange ");
    const name = e.target.name;
    const value = e.target.value;
    switch(name){
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      
      case "intro":
        setIntro(value);
          break;
      
        default:

    }
  }
  function handleChangefile(e){
    console.log("hola handleChangefile");
      let element = e.target;
      let file = element.files[0];
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function(){
        setCover(reader.result.toString());
      };
      
  }
  const handleSubmit =(e)=>{
    console.log("hola submit");
    e.preventDefault();
    let newProduct={
      id:crypto.randomUUID(),
      title,
      author,
      cover,
      intro
    }
  }

  return(
            <>
                <form className="row" onSubmit={handleSubmit}>
                    <InputClass onChange={handleChange} name_for="titulo"  title="Titulo" type_input="text" placeholder="Titulo" text_valid="Este campo es necesario" value={title} />
                    <InputClass onChange={handleChange} name_for="autor"  title="Autor" type_input="text" placeholder="Autor" text_valid="Este campo es necesario" value={author}/>
                    <InputClass onChange={handleChangefile} name_for="cover"  title="Cover" type_input="file" />
                    <div>
                      {!!cover? <img src={cover} width="200" alt="image"/>:""}
                    </div>
                    <InputClass onChange={handleChange} name_for="intro"  title="Intro" type_input="text" placeholder="Introduccion" text_valid="Este campo es necesario" value={intro}/>
                   
                   <div className="d-grid gap-2 col-6 mx-auto">
                    <div></div>
                    <ButtonsClass link={'/productos'} typ='submit' clas= "btn btn-primary"  titu="Registrar" accion= "aceptar" message="Gracias por su compra!"></ButtonsClass>
                    </div>
                    
                </form>
            </>
          
        )
}



 