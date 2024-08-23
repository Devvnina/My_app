const mongoose = require("mongoose")

mongoose.connect(`mongodb://localhost:27017/dbtpmongo`)
.then(()=>{console.log("Conectado")})
.catch((error=>console.log(error)))

module.exports = mongoose