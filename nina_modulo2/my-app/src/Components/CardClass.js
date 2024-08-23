
function CardClass({
    title,
    desc,
    butonName, 
    srcName,
    altName
  }){
   
    return (
        <>
        
         <div className="col-md-4">
            <div className="card mb-2">
                <img className="card-img-top" src={srcName} alt={altName}/>
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <a className="btn btn-primary">{butonName}</a>
                </div>
            </div>
        </div>
     </>
     )
}

export default CardClass