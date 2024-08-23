import instance from "../Config/axios"

export function getAllProductos(){
    // return fetch("https://api.mercadolibre.com/sites/MLA/search?q=ipod").then((res)=>res.json())
    return instance.get("sites/MLA/search?q=ipod")
}

export function getAllProductosMLA(buscar){
    return instance.get(`sites/MLA/search?q=${buscar}`)
}
export function getByIdProductosMLA(id){
    return instance.get(`items/${id}`)
}
export function createProductos(){
    
}
